package tn.rns.hrj.GestionDeStock.services;

import tn.rns.hrj.GestionDeStock.exceptions.EmailAlreadyUsedException;
import tn.rns.hrj.GestionDeStock.exceptions.ResourceNotFoundException;
import tn.rns.hrj.GestionDeStock.models.ERole;
import tn.rns.hrj.GestionDeStock.models.Role;
import tn.rns.hrj.GestionDeStock.models.User;
import tn.rns.hrj.GestionDeStock.payload.requests.LoginRequest;
import tn.rns.hrj.GestionDeStock.payload.requests.RegisterRequest;
import tn.rns.hrj.GestionDeStock.repositories.RoleRepository;
import tn.rns.hrj.GestionDeStock.repositories.UserRepository;
import tn.rns.hrj.GestionDeStock.security.jwt.JwtTokenUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.*; 

@Service
public class AuthService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

//     pour crypter le password (NB: il faut ajouter le bean BCryptPasswordEncoder dans l'application)
    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenUtils jwtTokenUtils;

    public Map<String, Object> login(LoginRequest loginRequest)
    {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Map<String, Object> result 
        = new HashMap<String, Object>(); 
        result.put("token",  this.jwtTokenUtils.generateToken(userDetails)); 
        result.put("user", userDetails); 
        return  result;
    }

    public String register(RegisterRequest registerRequest) throws EmailAlreadyUsedException {
        // test if email already used
        if (this.userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new EmailAlreadyUsedException("Error: Email is already in use!");
        }
        // Create new user account
        User user = new User();
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        // Traitement des Roles
        Set<String> registerRequestRoles = registerRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        // find Roles
        if (registerRequestRoles == null) {
            Role guestRole = this.roleRepository.findByName(ERole.GUEST)
                    .orElseThrow(() -> new ResourceNotFoundException("Error: Role is not found."));
            roles.add(guestRole);
        } else {
            registerRequestRoles.forEach(role -> {
                switch (role) {
                    case "super-admin":
                        Role superAdminRole = this.roleRepository.findByName(ERole.SUPER_ADMIN)
                                .orElseThrow(() -> new ResourceNotFoundException("Error: Role is not found."));
                        roles.add(superAdminRole);

                        break;
                    case "admin":
                        Role adminRole = this.roleRepository.findByName(ERole.ADMIN)
                                .orElseThrow(() -> new ResourceNotFoundException("Error: Role is not found."));
                        roles.add(adminRole);
                        break;
                    case "SURVEILLENT":
                        Role userRole = this.roleRepository.findByName(ERole.SURVEILLENT)
                                .orElseThrow(() -> new ResourceNotFoundException("Error: Role is not found."));
                        roles.add(userRole);
                        break;
                    case "ACHETEUR":
                        Role ACHETEURRole = this.roleRepository.findByName(ERole.ACHETEUR)
                                .orElseThrow(() -> new ResourceNotFoundException("Error: Role is not found."));
                        roles.add(ACHETEURRole);
                        break; 
                    case "GSTOCK":
                        Role GSTOCKRole = this.roleRepository.findByName(ERole.GSTOCK)
                                .orElseThrow(() -> new ResourceNotFoundException("Error: Role is not found."));
                        roles.add(GSTOCKRole);
                        break;  
                    default:
                        Role guestRole = this.roleRepository.findByName(ERole.GUEST)
                                .orElseThrow(() -> new ResourceNotFoundException("Error: Role is not found."));
                        roles.add(guestRole);
                }
            });
        }

        // Affect User Roles
        user.setRoles(roles);
        this.userRepository.save(user);
        return "User registered successfully!";
    }
}

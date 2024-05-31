package tn.rns.hrj.GestionDeStock.services;


import tn.rns.hrj.GestionDeStock.exceptions.EmailAlreadyUsedException;
import tn.rns.hrj.GestionDeStock.exceptions.ResourceNotFoundException;
import tn.rns.hrj.GestionDeStock.models.Categorie;
import tn.rns.hrj.GestionDeStock.models.Commande;
import tn.rns.hrj.GestionDeStock.models.ERole;
import tn.rns.hrj.GestionDeStock.models.Fournisseur;
import tn.rns.hrj.GestionDeStock.models.Role;
import tn.rns.hrj.GestionDeStock.models.User;
import tn.rns.hrj.GestionDeStock.payload.requests.RegisterRequest;
import tn.rns.hrj.GestionDeStock.repositories.CategorieRepository;
import tn.rns.hrj.GestionDeStock.repositories.CommandeRepository;
import tn.rns.hrj.GestionDeStock.repositories.FournisseurRepository;
import tn.rns.hrj.GestionDeStock.repositories.ProduitRepository;
import tn.rns.hrj.GestionDeStock.repositories.RoleRepository;
import tn.rns.hrj.GestionDeStock.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.Map;
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    ProduitRepository produitRepository;
    
    @Autowired
    CommandeRepository commandeRepository ;
    
    @Autowired
    FournisseurRepository fournisseurRepository ;
    
    @Autowired
    CategorieRepository categorieRepository ;
    public String addUser(RegisterRequest registerRequest) {

        // test if email already used
//        if (this.userRepository.existsByEmail(registerRequest.getEmail())) {
//            throw new EmailAlreadyUsedException("Error: Email is already in use!");
//        }
        // Create new user account
        User user = new User();
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setTelp(registerRequest.getTelp());
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


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByID(long  id) {
        Optional<User> userData =  userRepository.findById(id);
        return userData.orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    public String updateUserByID(long  id, User user)
    {
        Optional<User> userData = this.userRepository.findById(id);
        if (userData.isPresent()) {
            User existingUser = userData.orElse(null);
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());
            // save existingUser in the database
            this.userRepository.save(existingUser);
            // return statement
            return "User updated successfully!";
        } else {
            throw new ResourceNotFoundException("User not found");
        }
    }

    public String deleteUserByID(long id) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            userRepository.delete(existingUser.get());
            return "User deleted successfully!";
        } else {
            throw new ResourceNotFoundException("User not found");
        }
    }
    // Affecter Role to user
    public String affectUserToRole(long idUser, long idRole) {
        Optional<User> userData = this.userRepository.findById(idUser);
        if (userData.isPresent()) {
            User existingUser = userData.orElseThrow(() -> new ResourceNotFoundException("User not found"));
            Optional<Role> roleData = this.roleRepository.findById(idRole);
            if (roleData.isPresent()) {
                Role existingRole = roleData.orElseThrow(() -> new ResourceNotFoundException("Role not found"));
                Set<Role> roles = existingUser.getRoles();
                roles.add(existingRole);
                existingUser.setRoles(roles);
                this.userRepository.save(existingUser);
            }
        }
        return "User affected to role successfully!";
    }
    @Transactional(readOnly = true)
    public User findByEmail(String email) {
        User user = null;
        try {
            user = userRepository.findByEmail(email);
        } catch (Exception e) {
            throw e;
        }
        return user;
    }


	public Map detailDashbord() {
		// TODO Auto-generated method stub
		long countUser = userRepository.count();
		long countFournisseur = fournisseurRepository.count();
		long countProduit = produitRepository.count();
		long countCommande = commandeRepository.count();
		 List<Commande> lastCommande = commandeRepository.findTop5ByOrderByIdDesc();
		 List<Fournisseur> lastfournisseur = fournisseurRepository.findTop5();
		 List<Categorie> lastcategry = categorieRepository.findTop5();
		 
		  Map<String, Object> hm 
          = new HashMap<String, Object>() ;
		  hm.put("countUser", countUser);
		  hm.put("countFournisseur", countFournisseur);
		  hm.put("countProduit", countProduit);
		  hm.put("countCommande", countCommande);
		  hm.put("lastCommande", lastCommande);
		  hm.put("lastfournisseur", lastfournisseur);
		  hm.put("lastcategry", lastcategry);
		return hm;
	}

}

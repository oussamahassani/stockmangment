package tn.rns.hrj.GestionDeStock.controllers;

import tn.rns.hrj.GestionDeStock.exceptions.EmailAlreadyUsedException;
import tn.rns.hrj.GestionDeStock.payload.requests.LoginRequest;
import tn.rns.hrj.GestionDeStock.payload.requests.RegisterRequest;
import tn.rns.hrj.GestionDeStock.payload.responses.LoginResponse;
import tn.rns.hrj.GestionDeStock.payload.responses.MessageResponse;
import tn.rns.hrj.GestionDeStock.services.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*", maxAge = 3600)

public class AuthController {

    @Autowired
    AuthService authService;


    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest)
    {
    	Map<String, Object> result = this.authService.login(loginRequest);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/register")
    public ResponseEntity<MessageResponse> register(@Valid @RequestBody RegisterRequest registerRequest) throws EmailAlreadyUsedException {
        String message = this.authService.register(registerRequest);
        return ResponseEntity.ok(new MessageResponse(message));
    }
}

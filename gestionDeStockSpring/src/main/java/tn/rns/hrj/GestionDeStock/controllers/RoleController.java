package tn.rns.hrj.GestionDeStock.controllers;
import tn.rns.hrj.GestionDeStock.models.Role;
import tn.rns.hrj.GestionDeStock.payload.responses.MessageResponse;
import tn.rns.hrj.GestionDeStock.services.RoleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("roles")
public class RoleController {

    @Autowired
    RoleService roleService;

    @PostMapping("/")
    public ResponseEntity<Role> saveNewRole(@RequestBody Role role)
    {
        Role savedRole =  this.roleService.saveNewRole(role);
        return new ResponseEntity<>(savedRole, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Role>> getAllRoles()
    {
        List<Role> listRoles = this.roleService.getAllRoles();
        return new ResponseEntity<>(listRoles, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findUserByID(@PathVariable("id") long id)
    {
        Role role = this.roleService.findRoleByID(id);
        return new ResponseEntity<>(role, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MessageResponse> updateUserByID(@PathVariable("id") long id, @RequestBody Role role)
    {
        String message = this.roleService.updateRoleByID(id, role);
        return new ResponseEntity<>(new MessageResponse(message), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteUserById(@PathVariable("id") long id)
    {
        String message = this.roleService.deleteRoleById(id);
        return new ResponseEntity<>(new MessageResponse(message), HttpStatus.OK);
    }
}

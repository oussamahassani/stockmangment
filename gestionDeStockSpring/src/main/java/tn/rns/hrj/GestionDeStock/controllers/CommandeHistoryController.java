package tn.rns.hrj.GestionDeStock.controllers;


import tn.rns.hrj.GestionDeStock.models.Commande;
import tn.rns.hrj.GestionDeStock.models.CommandesHistory;
import tn.rns.hrj.GestionDeStock.payload.requests.CommandeRequest;
import tn.rns.hrj.GestionDeStock.payload.responses.MessageResponse;
import tn.rns.hrj.GestionDeStock.services.CommandeHistoryService;
import tn.rns.hrj.GestionDeStock.services.CommandeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins="http://localhost:4200/")
@RestController
@RequestMapping(value = "/commandeshistory")
public class CommandeHistoryController {

    @Autowired
    CommandeHistoryService commandehistoryService;

    @PostMapping("/addCommande")
    public ResponseEntity<MessageResponse> addCommande(@RequestBody CommandeRequest commande) {
        String message = commandehistoryService.addCommandeHistorique(commande);
        return ResponseEntity.ok().body(new MessageResponse(message));
    }


    @GetMapping("/allcommande")
//    @PreAuthorize(" hasRole('USER') ")
    public ResponseEntity<List<CommandesHistory>> getAllUsers() {
        List<CommandesHistory> listCommande = this.commandehistoryService.getAllCommandes();
        return new ResponseEntity<>(listCommande, HttpStatus.OK);
    }

    @GetMapping("getCommandeById/{id}")
    public ResponseEntity<CommandesHistory> getCommandeByID(@PathVariable(value="id") int id) {
    	CommandesHistory user = commandehistoryService.getCommandeByID(id);
        if(user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(user);
    }

}

package tn.rns.hrj.GestionDeStock.services;

import tn.rns.hrj.GestionDeStock.exceptions.ResourceNotFoundException;
import tn.rns.hrj.GestionDeStock.models.*;
import tn.rns.hrj.GestionDeStock.payload.requests.CommandeHistoryRequest;
import tn.rns.hrj.GestionDeStock.payload.requests.CommandeRequest;
import tn.rns.hrj.GestionDeStock.repositories.ClientRepository;
import tn.rns.hrj.GestionDeStock.repositories.CommandeHistoryRepository;
import tn.rns.hrj.GestionDeStock.repositories.CommandeItemRespository;
import tn.rns.hrj.GestionDeStock.repositories.CommandeRepository;
import tn.rns.hrj.GestionDeStock.repositories.ProduitRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommandeHistoryService {
    @Autowired
    CommandeRepository commandeRepository;

    @Autowired
    CommandeHistoryRepository commandeHistoryRepository; 

    public String addCommandeHistorique(CommandeHistoryRequest commande) {
        Optional<Commande> commandeSaved =commandeRepository.findById(commande.getIdcommande());
        CommandesHistory newCommande =new CommandesHistory();
        newCommande.setRefCommande(commande.getRefCommande());
        newCommande.setCommande(commandeSaved.get());
        newCommande.setMessage(commande.getMessage());;
        
      
        CommandesHistory com= commandeHistoryRepository.save(newCommande);

        
   
        return "Commande History added successfully";
    }

    public List<CommandesHistory> getAllCommandes() {
        return commandeHistoryRepository.findAll();
    }

    public CommandesHistory getCommandeByID(int id) {
        Optional<CommandesHistory> userData =  commandeHistoryRepository.findById(id);
        return userData.orElseThrow(() -> new ResourceNotFoundException("Commande not found"));
    }

}

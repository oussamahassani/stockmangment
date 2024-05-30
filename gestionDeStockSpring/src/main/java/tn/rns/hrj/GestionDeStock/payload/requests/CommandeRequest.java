package tn.rns.hrj.GestionDeStock.payload.requests;

import lombok.Data;
import tn.rns.hrj.GestionDeStock.models.Client;
import tn.rns.hrj.GestionDeStock.models.CommandeItem;

import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.Set;


@Data
public class CommandeRequest {
    private int idClient;
    @NotBlank
    private String refCommande;
    private double montant_total;
    private Date date_commande;
    private Boolean valide;
    private Client client;


    private Set<CommandeItem> commandeItems;


}

package tn.rns.hrj.GestionDeStock.payload.requests;

import java.util.Set;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class CommandeHistoryRequest {

	 private int idcommande;
	 
	    @NotBlank
	    private String refCommande;
	    
	    private String message ;
}

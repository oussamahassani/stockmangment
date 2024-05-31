package tn.rns.hrj.GestionDeStock.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import tn.rns.hrj.GestionDeStock.models.Fournisseur;

import java.util.List;

@Repository
public interface FournisseurRepository extends JpaRepository<Fournisseur, Integer> {
    //   get client By fav
    public List<Fournisseur> getByFavorisFournisseur(Boolean fav);

	
    @Query(value = "SELECT * FROM `fournisseurs` ORDER BY _id LIMIT 5",
    	      nativeQuery = true)
	public List<Fournisseur> findTop5();
}

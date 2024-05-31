package tn.rns.hrj.GestionDeStock.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import tn.rns.hrj.GestionDeStock.models.Categorie;
import tn.rns.hrj.GestionDeStock.models.Fournisseur;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Integer> {

    @Query(value = "SELECT * FROM `categories` ORDER BY _id LIMIT 5",
  	      nativeQuery = true)
	List<Categorie> findTop5();
}

package tn.rns.hrj.GestionDeStock.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.rns.hrj.GestionDeStock.models.Commande;

@Repository
public interface CommandeRepository extends JpaRepository<Commande, Integer> {

	List<Commande> findTop5ByOrderByIdDesc();
}

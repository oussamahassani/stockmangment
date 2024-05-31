package tn.rns.hrj.GestionDeStock.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.rns.hrj.GestionDeStock.models.Commande;
import tn.rns.hrj.GestionDeStock.models.CommandesHistory;

@Repository
public interface CommandeHistoryRepository extends JpaRepository<CommandesHistory, Integer> {

	List<CommandesHistory> findTop5ByOrderByIdDesc();
}

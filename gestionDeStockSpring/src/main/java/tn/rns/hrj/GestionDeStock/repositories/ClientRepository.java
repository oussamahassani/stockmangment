package tn.rns.hrj.GestionDeStock.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.rns.hrj.GestionDeStock.models.Client;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {
    //   get client By fav
    public List<Client> getByFavorisClient(Boolean fav);
}

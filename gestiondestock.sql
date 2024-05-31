-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 31 mai 2024 à 15:16
-- Version du serveur : 10.6.0-MariaDB
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestiondestock`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `_id` int(11) NOT NULL,
  `name_cat` varchar(255) DEFAULT NULL,
  `ref_cat` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`_id`, `name_cat`, `ref_cat`) VALUES
(14, ' Batteries', '101'),
(15, 'Glass', '102'),
(16, 'Airbags', '103');

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL,
  `adresse_client` varchar(255) DEFAULT NULL,
  `email_client` varchar(255) DEFAULT NULL,
  `favoris_client` bit(1) DEFAULT NULL,
  `fax_client` varchar(255) DEFAULT NULL,
  `modepaiment_client` varchar(255) DEFAULT NULL,
  `name_client` varchar(255) DEFAULT NULL,
  `ref_client` varchar(255) DEFAULT NULL,
  `telp_client` varchar(255) DEFAULT NULL,
  `type_client` varchar(255) DEFAULT NULL,
  `ville_client` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `adresse_client`, `email_client`, `favoris_client`, `fax_client`, `modepaiment_client`, `name_client`, `ref_client`, `telp_client`, `type_client`, `ville_client`) VALUES
(18, 'sousse', 'mohmed@gmail.com', b'1', '20000000', 'CHEK', 'mohamed', '101', '20000000', 'b2b', 'TUNIS'),
(19, 'tuniq', 'salah@gmail.fr', b'0', '2011', 'CHEK', 'salah', '1044', '200111', 'b2c', 'tunis');

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
CREATE TABLE IF NOT EXISTS `commandes` (
  `id` int(11) NOT NULL,
  `date_commande` datetime DEFAULT NULL,
  `montant_total` double DEFAULT NULL,
  `ref_commande` varchar(255) DEFAULT NULL,
  `valide` bit(1) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoib3exi3ry2spqi19i9qk4ey1` (`client_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commandes`
--

INSERT INTO `commandes` (`id`, `date_commande`, `montant_total`, `ref_commande`, `valide`, `client_id`) VALUES
(20, '2024-05-31 10:31:05', 45, '1011', b'1', 19),
(21, '2024-05-31 10:32:06', 135, '101010', b'0', 18);

-- --------------------------------------------------------

--
-- Structure de la table `commande_items`
--

DROP TABLE IF EXISTS `commande_items`;
CREATE TABLE IF NOT EXISTS `commande_items` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `idp` bigint(20) DEFAULT NULL,
  `price` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `commande_id` int(11) DEFAULT NULL,
  `produit_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK41s8mamopvioe9srxqockm08h` (`commande_id`),
  KEY `FK5f5yq5l9mgt6o6j7lnbffjwm8` (`produit_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commande_items`
--

INSERT INTO `commande_items` (`id`, `idp`, `price`, `quantity`, `commande_id`, `produit_id`) VALUES
(1, NULL, 45, 3, 20, 17),
(2, NULL, 135, 9, 21, 17);

-- --------------------------------------------------------

--
-- Structure de la table `fournisseurs`
--

DROP TABLE IF EXISTS `fournisseurs`;
CREATE TABLE IF NOT EXISTS `fournisseurs` (
  `_id` int(11) NOT NULL,
  `adresse_fournisseur` varchar(255) DEFAULT NULL,
  `email_fournisseur` varchar(255) DEFAULT NULL,
  `favoris_fournisseur` bit(1) DEFAULT NULL,
  `fax_fournisseur` varchar(255) DEFAULT NULL,
  `modepaiment_fournisseur` varchar(255) DEFAULT NULL,
  `name_fournisseur` varchar(255) DEFAULT NULL,
  `ref_fournisseur` varchar(255) DEFAULT NULL,
  `telp_fournisseur` varchar(255) DEFAULT NULL,
  `type_fournisseur` varchar(255) DEFAULT NULL,
  `ville_fournisseur` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `fournisseurs`
--

INSERT INTO `fournisseurs` (`_id`, `adresse_fournisseur`, `email_fournisseur`, `favoris_fournisseur`, `fax_fournisseur`, `modepaiment_fournisseur`, `name_fournisseur`, `ref_fournisseur`, `telp_fournisseur`, `type_fournisseur`, `ville_fournisseur`) VALUES
(7, 'sousse', 'sssz@gmail.com', b'0', '12000', 'VERMENT', 'oussama', '0101', '201022', 'szs', 'TUNIS');

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(24);

-- --------------------------------------------------------

--
-- Structure de la table `packs`
--

DROP TABLE IF EXISTS `packs`;
CREATE TABLE IF NOT EXISTS `packs` (
  `id` int(11) NOT NULL,
  `name_pack` varchar(255) DEFAULT NULL,
  `ref_pack` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `id` bigint(20) NOT NULL,
  `id_cat` varchar(255) DEFAULT NULL,
  `id_fournisseur` varchar(255) DEFAULT NULL,
  `name_produit` varchar(255) DEFAULT NULL,
  `prix_dachat` double DEFAULT NULL,
  `prix_vente` double DEFAULT NULL,
  `qte_produit` int(11) DEFAULT NULL,
  `ref_produit` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `id_cat`, `id_fournisseur`, `name_produit`, `prix_dachat`, `prix_vente`, `qte_produit`, `ref_produit`) VALUES
(17, '15', '7', 'glass1', 10, 15, 7, '101baz');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` bigint(20) NOT NULL,
  `name` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'SUPER_ADMIN'),
(2, 'ADMIN'),
(3, 'ACHETEUR'),
(4, 'SURVEILLENT'),
(5, 'GSTOCK');

-- --------------------------------------------------------

--
-- Structure de la table `roles_users`
--

DROP TABLE IF EXISTS `roles_users`;
CREATE TABLE IF NOT EXISTS `roles_users` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKsmos02hm32191ogexm2ljik9x` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `roles_users`
--

INSERT INTO `roles_users` (`user_id`, `role_id`) VALUES
(6, 1),
(13, 4),
(22, 5),
(23, 4);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `telp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `adresse`, `age`, `email`, `first_name`, `last_name`, `password`, `telp`) VALUES
(13, NULL, 0, 'xxs@gmail.com', 'xxs', 'xs', '$2a$10$vNmTcyE4KkbxNOZKTanE4OS8n8PcSYM.q/9GyzrGLGEtMggxZLY4.', '0'),
(6, NULL, 0, 'admin@gmail.com', 'oussama', 'oussama', '$2a$10$0pvGTeXF5SjuHlfYPjxfaOPfbJURff.Ucfk3hVv1hQ/5mlz0PAYay', '0'),
(22, NULL, 0, 'stock@gmail.com', 'gestion', 'oussama', '$2a$10$laXo1TpKExwPLQCt6ZcJze0XbCV6Q81/nrYVmM.xaadRgh1Jg6tYu', '0'),
(23, NULL, 0, 'test@gmail.com', 'test', 'test', '$2a$10$bMrepZ/MbaE7jqOR73CsZOyCJG5z5MXydV.Qg/00pxy9wUJGtdHT2', '0');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

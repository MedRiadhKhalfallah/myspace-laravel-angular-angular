import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PaymentComponent} from "./tarification/payment/payment.component";
import {TarificationComponent} from "./tarification/tarification/tarification.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'tarification',
    component: TarificationComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module')
      .then(mod => mod.AuthentificationModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module')
      .then(mod => mod.ProfileModule)
  },
  {
    path: 'repaire-produits',
    loadChildren: () => import('./produit/produit.module')
      .then(mod => mod.ProduitModule)
  },
  {
    path: 'societe',
    loadChildren: () => import('./societe/societe.module')
      .then(mod => mod.SocieteModule)
  },
  {
    path: 'etat',
    loadChildren: () => import('./etat/etat.module')
      .then(mod => mod.EtatModule)
  },
  {
    path: 'newProduit',
    loadChildren: () => import('./new-produit/new-produit.module')
      .then(mod => mod.NewProduitModule)
  },
  {
    path: 'typeActivite',
    loadChildren: () => import('./type-activite/type-activite.module')
      .then(mod => mod.TypeActiviteModule)
  },
  {
    path: 'modele',
    loadChildren: () => import('./modele/modele.module')
      .then(mod => mod.ModeleModule)
  },
  {
    path: 'sousCategorie',
    loadChildren: () => import('./sous-categorie/sous-categorie.module')
      .then(mod => mod.SousCategorieModule)
  },
  {
    path: 'marque',
    loadChildren: () => import('./marque/marque.module')
      .then(mod => mod.MarqueModule)
  },
  {
    path: 'categorie',
    loadChildren: () => import('./categorie/categorie.module')
      .then(mod => mod.CategorieModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./historique/historique.module')
      .then(mod => mod.HistoriqueModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./produits/produits.module')
      .then(mod => mod.ProduitsModule)
  },
  {
    path: 'produit-utilisateur',
    loadChildren: () => import('./produit-utilisateur/produit-utilisateur.module')
      .then(mod => mod.ProduitUtilisateurModule)
  },
  {
    path: 'reclamation',
    loadChildren: () => import('./reclamation/reclamation.module')
      .then(mod => mod.ReclamationModule)
  },
  {
    path: 'roue-chance',
    loadChildren: () => import('./roue-chance/roue-chance.module')
      .then(mod => mod.RoueChanceModule)
  },
  {
    path: 'roue-chance-participant',
    loadChildren: () => import('./roue-client/roue-client.module')
      .then(mod => mod.RoueClientModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(mod => mod.AdminModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module')
      .then(mod => mod.NotificationModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

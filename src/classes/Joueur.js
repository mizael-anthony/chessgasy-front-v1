

export default class Joueur {
    constructor({
        id,
        first_name,
        last_name,
        date_de_naissance,
        email,
        password,
        club,
        genre,
        est_licence,
        titre,
        id_fide,
        role,
        contact,
        profil

    }) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.date_de_naissance = date_de_naissance
        this.email = email
        this.password = password
        this.club = club
        this.genre = genre
        this.est_licence = est_licence
        this.titre = titre
        this.id_fide = id_fide
        this.role = role
        this.contact = contact
        this.profil = profil
    }
} 
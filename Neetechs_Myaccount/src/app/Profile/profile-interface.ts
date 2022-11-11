export interface ProfileInterface {
}
export interface PeopleInterface {
    results: PersonInterface;
    count: any;
    next: any;
    previous: any;
}
export interface PersonInterface {
    picture_tag: any;
    picture_small: any;
    picture_medium: any;
    othersSocialMedia: any;
    picture: any;
    phone: any;
    name: any;
    members: any;
    member_since: any;
    location: any;
    is_creator: any;
    id: any;
    site_id: any;
    followers: any;
    first_name: any;
    email: any;
    earning: any;
    country: any;
    city: any;
    bio: any;
    address2: any;
    address1: any;
    about: any;
    SubcategoryLastupdate: any;
    Linkdin_link: any;
    Facebook_link: any;
    CategoryLastupdate: any;
    profession: any;
    rating: any;
    sms: any;
    state: any;
    zip_code: any;
    Erfarenhet: any;
    Intressen: any;
    Kompetenser_intyg: any;
    Studier: any;
    twitter: any;
}
export interface kompetenserInterface {
    Added_at: any
    id: any
    name: any
    site_id: any
    updated_at: any
    username: any
}
export interface studiersInterface {
    Added_at: any
    id: any
    name: any
    site_id: any
    updated_at: any
    username: any
    content: any
    degree: any
    ended_at: any
    plats: any
    started_at: any
}
export interface erfarenhetsInterface {
    Added_at: any
    id: any
    name: any
    site_id: any
    updated_at: any
    username: any
    content: any
    degree: any
    ended_at: any
    plats: any
    started_at: any
    
}
export interface intressensInterface {
    Added_at: any
    id: any
    name: any
    site_id: any
    updated_at: any
    username: any
    
}
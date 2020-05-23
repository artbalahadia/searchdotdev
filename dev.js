class Dev {
    constructor(){
        this.clientId = 'ef580aa529376715dc79';
        this.clientSecret = 'e0581e65a34c6768e17fc2f7ab6856294009463b';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    // Get user profiles
    async getUser(user){
        // Profile data fetch
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        // Repo data fetch
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        
        return {
            profile,
            repos
        }
    }
};


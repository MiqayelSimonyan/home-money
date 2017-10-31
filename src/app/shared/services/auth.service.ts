export class AuthService {
	private isAuthenticated = false;

	public login() {
		this.isAuthenticated = true;		
	}

	public logout() {
		this.isAuthenticated = false;
		localStorage.clear();
	}

	public isLoggedIn(): boolean {
		return this.isAuthenticated;
	}

	public getToken(token): string {
		return localStorage.getItem(token);
	}
}
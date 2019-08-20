import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
	selector: 'fac-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	constructor(
		private router: Router
	) { }

	ngOnInit() {
		console.log(1);
	}

	redirect(path:string){
		console.log(path);
		this.router.navigate([path]);
	}
}

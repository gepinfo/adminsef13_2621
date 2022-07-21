import { Component, OnInit } from '@angular/core';
import { Testing3Service } from './testing3.service';
// @ts-ignore
import grapesjs from 'grapesjs';
// @ts-ignore
import * as  Highcharts from 'highcharts';
// @ts-ignore
import faker from 'faker';


@Component({
  selector: 'app-testing3',
  templateUrl: './testing3.component.html',
  styleUrls: ['./testing3.component.scss'],
})

export class Testing3Component implements OnInit {
    public User = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phonenumber: '',
        avatar: '',
        Idtoken: '',
        loggedinDate: '',
        loggedoutDate: '',
        role: '',
        org: '',
        org_country: '',
        org_sub1: '',
        org_sub2: '',
        org_sub3: '',
    }

    public url: any = '';
    public firstName = '';
    public lastName = '';
    public Id: any;
    public Image: any;
    public changeName: any;
    public open: any;
    public close: any;

    constructor (
        private testing3Service: Testing3Service,
    ) { }

    ngOnInit() {
        this.User.created_by = sessionStorage.getItem('email') || ''; 
            this.Id = sessionStorage.getItem('Id');
            this.Image = sessionStorage.getItem('Image');
    }
}
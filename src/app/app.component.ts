import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            acceptTerms: [false, Validators.requiredTrue]
        });
    }

    get formC() { 
    return this.registerForm.controls; }

    onSubmit() {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    
}

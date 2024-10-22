import { Component, inject } from '@angular/core';
import { MarqueeButtonComponent } from "../../shared/marquee-button/marquee-button.component";
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [MarqueeButtonComponent, FormsModule, CommonModule, RouterModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  isCheckboxChecked: boolean = false;
  showCheckboxError: boolean = false;
  localHostMailTest: boolean = true;

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  adjustTextareaHeight(event: Event): void {
    let textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; 
    textarea.style.height = `${textarea.scrollHeight}px`; 
  }


  post = {
    endPoint: 'https://deineDomain.de/sendMail.php', // Change with Domain.
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.localHostMailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.localHostMailTest) {

      ngForm.resetForm();
    }
  }

  getErrorPlaceholder(field: string, contactForm: NgForm): string {
    if (!contactForm.controls[field]?.valid && contactForm.controls[field]?.touched) {
      switch (field) {
        case 'name':
          return 'CONTACT_ME_FORM_ERROR_NAME';
        case 'email':
          return 'CONTACT_ME_FORM_ERROR_EMAIL';
        case 'message':
          return 'CONTACT_ME_FORM_ERROR_MESSAGE';
        default:
          return '';
      }
    }
    return "";
  }


  markFieldsAsTouched(contactForm: NgForm) {
    Object.keys(contactForm.controls).forEach(field => {
      contactForm.controls[field].markAsTouched();
    });

    if (!this.isCheckboxChecked) {
      this.showCheckboxError = true;
    } else {
      this.showCheckboxError = false;
    }
  }
}

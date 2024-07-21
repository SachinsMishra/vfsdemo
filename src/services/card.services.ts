import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CardService {
    constructor(
        // private _http: HttpClient
    ) { }

    public getCardData() {
        return [
            {
                title: "Transition Connection Job Sharing Form",
                text: "If you are a V3 Employer that would like to share job positions, please submit the online form below. Job postings are distributed weekly in the Transition Connection Newsletter to Veterans and Transitioning Service Members seeking employment. The Transition Connection is operated by the Virginia Transition and Assistance Program (VTAP) under the Virginia Department of Veteran Services."
            },
            {
                title: "New Enrollment",
                text: "Join this elite group of employers who have made public commitments to the Commonwealth to recruit, hire, and retain qualified Veterans, enroll and participate for free!"
            },
            {
                title: "Hiring Reports",
                text: "In the interest of ever-increasing efficiency, the V3 Program request V3 companies to submit their quarterly hiring reports in a secure and expedient fashion. All information submitted through this form is encrypted and secured. Your report, whether or not it includes a best practice or success story, will automatically be counted toward your continuing activity credits for […]"
            },
            {
                title: "Listing Update Request Form",
                text: ""
            },
            {
                title: "V3 Company Success Story",
                text: "Share a brief story about how your company overcame obstacles to support a Veteran employee. Share any aspect of your company’s recruiting, hiring, training, or re-training process that made your success possible."
            },
            {
                title: "V3 Grant Application",
                text: "V3-Certified Companies are eligible to receive up to $10,000 in grant funding to support Veteran employment. Learn more by visiting the V3 Grant section."
            }
        ];
    }

}
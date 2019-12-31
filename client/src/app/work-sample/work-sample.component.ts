import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-sample',
  templateUrl: './work-sample.component.html',
  styleUrls: ['./work-sample.component.css']
})
export class WorkSampleComponent implements OnInit, OnDestroy {

  private pathParamSubs: Subscription;
  public projectName: string;

  public workInfo = {
    'passwordChecker': {
      workId: 1,
      projectName: 'Password Checker Project',
      projectDescription: 'Password checker project in python. The project simply receives a string and convert it into sha1 using python built in hashlib module. The SHA 1 string is then verified against list of breach passwords using k anonymity. The api used for verifying the password is from haveibeenpwned api endpoint.',
      githubLink: 'https://github.com/Vijay2351989/python-password-checker',

    },
    'webScraping': {
      workId: 2,
      projectName: 'Web Scraping',
      projectDescription: 'A web scraping project in python using BeautifulSoup. The  project scrape through the Hacker news website and list down the most highest rated article in descending order. The application is configurable in terms of how many pages of the website you want to scrape.',
      githubLink: 'https://github.com/Vijay2351989/web-scraping-python',

    },
    'imageConverter': {
      workId: 3,
      projectName: 'JPG to PNG converter',
      projectDescription: 'Convert jpg image to png using Pillow2 image processing module.',
      githubLink: 'https://github.com/Vijay2351989/jpg-png-converter',
    },
    'pdfMerger': {
      workId: 4,
      projectName: 'Merge PDF files',
      projectDescription: 'The project merge the content of multiple PDF files into one and also add a watermark to the same.',
      githubLink: 'https://github.com/Vijay2351989/pdf-with-python',
    },
    'sendEmail': {
      workId: 5,
      projectName: 'Send Email',
      projectDescription: 'The project uses python email (for configuring messages), smtplib(smtp protocol) library to work with emails (sending/receiving) emails using python scripts',
      githubLink: 'https://github.com/Vijay2351989/send-email-python',
    },
    'sendSMS': {
      workId: 6,
      projectName: 'Send SMS',
      projectDescription: 'The project send/receive sms in python using twilio library.',
      githubLink: 'https://github.com/Vijay2351989/sms-with-python',
    },

  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //navActivePage();
    this.pathParamSubs = this.activatedRoute.paramMap.subscribe(val => {
      console.log(val);
      this.projectName = val['params'].id
    })
  }

  ngOnDestroy(): void {
    this.pathParamSubs.unsubscribe()

  }

}

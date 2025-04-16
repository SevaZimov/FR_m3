import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements 
  OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  
  userName: string = '';
  greeting: string = '';
  showGreeting: boolean = false;
  logMessages: string[] = [];

  constructor() { 
    this.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges called');
  }

  ngOnInit(): void {
    this.log('ngOnInit called');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy called');
  }

  showGreetingMessage(): void {
    this.showGreeting = true;
    this.greeting = `Привет, ${this.userName}!`;
    this.log('Greeting shown for: ' + this.userName);
  }

  private log(message: string): void {
    this.logMessages.push(message);
    console.log(message);
  }
}
import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy,
  SimpleChanges 
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements 
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

  // 1. Хук инициализации компонента
  ngOnInit(): void {
    this.log('ngOnInit called');
  }

  // 2. Хук изменения входных свойств
  ngOnChanges(changes: SimpleChanges): void {
    this.log(`ngOnChanges called with changes: ${JSON.stringify(changes)}`);
  }

  // 3. Хук проверки изменений
  ngDoCheck(): void {
    this.log('ngDoCheck called');
  }

  // 4. Хук после инициализации содержимого
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit called');
  }

  // 5. Хук после проверки содержимого
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked called');
  }

  // 6. Хук после инициализации представления
  ngAfterViewInit(): void {
    this.log('ngAfterViewInit called');
  }

  // 7. Хук после проверки представления
  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked called');
  }

  // 8. Хук разрушения компонента
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
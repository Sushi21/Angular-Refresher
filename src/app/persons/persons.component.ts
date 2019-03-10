import { Component, OnInit, OnDestroy, } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy{
  personList: string[];
  isFetching = false;
  private personListsSubs: Subscription;

  constructor(private personService: PersonsService) {}

  ngOnInit(): void {
    this.personService.fetchPersons();
    this.personList = this.personService.persons;
    this.personListsSubs = this.personService.personsChanged.subscribe( persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
  }

  ngOnDestroy(): void {
    this.personListsSubs.unsubscribe();
  }

  onRemovePerson(personName: string) {
    this.personService.removePerson(personName);
  }

}

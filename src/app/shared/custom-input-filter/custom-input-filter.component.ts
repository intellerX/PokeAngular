import { Component, Input } from '@angular/core';
import { Pokemon } from '../../features/pokemonManagement/models/pokemon';
import { ServiceBusService } from 'src/app/features/pokemonManagement/services/service-bus.service';
import { PokemonService } from 'src/app/features/pokemonManagement/services/pokemon.service';

@Component({
  selector: 'app-custom-input-filter',
  templateUrl: './custom-input-filter.component.html',
  styleUrls: ['./custom-input-filter.component.scss']
})
export class CustomInputFilterComponent {

  @Input() pokemonMain: Pokemon[] = [];

  @Input() name = '';
  @Input() label = '';
  @Input() placeHolder = '';

  value = '';
  selectedOption = "";

  constructor(private serviceBus: ServiceBusService) { }

  ngOnInit() {
    this.pokemonMain = this.serviceBus.pokemonMain;

    console.log(this.pokemonMain);

  }





}

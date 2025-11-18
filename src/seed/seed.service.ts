import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({}); //mejor eliminar toda la base de datos, antes de ejecutar el SEED, y evitar errores de data clonada.
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=20',
    );

    const pokemonToInsert: { name: string; no: number }[] = [];
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });
    });
    await this.pokemonModel.insertMany(pokemonToInsert);
    // esta es la forma mas eficiente de insertar en bloque un tamaño de datos grande. Se crea un array con los datos, y luego se inserta este array con el comando insertMany.
    // otra opcion que se puede aplicar es el crear un array de promesas, y luego se hace la insercion normal. de cada promesa. Lo deficiente aca, es que se harian X numero de inserciones a la base de datos, lo que demoraria tiempo, y ademas consume recurso del servidor. Por este mejor manejarlo con insertMany(), que no reduce el consumo de recurso del servidor.
    return 'SEED Executed';
  }
}

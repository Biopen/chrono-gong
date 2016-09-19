import { Gong } from './gong';

export class Params 
{
  constructor(
    public gongs : Gong[],
    public globalVolume : number
  ) { }
}
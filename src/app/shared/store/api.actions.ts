import { createAction, props } from "@ngrx/store";
import { Character } from "../interfaces/character.interface";
import { Episode } from "../interfaces/episode.interface";
import { Location } from "../interfaces/location.interface";

export const doSearchRequest = createAction('[API] do search request', props<{url: string}>());

export const doSearchRequestSuccess = createAction('[API] search request success', props<{
  characters: Character[],
  locations: Location[],
  episodes: Episode[],
}>());

export const doSearchRequestFail = createAction('[API] search request fail');


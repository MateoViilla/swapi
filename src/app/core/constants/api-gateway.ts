import { environment } from './../../../environments/environment';

const API_URL = `${environment.SWAPI_DOMAIN}/api`;

export class ApiGateway {
  public static readonly FILMS = `${API_URL}/films`;
  public static readonly CHARACTERS = `${API_URL}/people`;
}

import { hash, compare } from 'bcryptjs';
import IHashProvider from '../models/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    const response = hash(payload, 8);
    return response;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    const response = await compare(payload, hashed);
    return response;
  }
}

export default BCryptHashProvider;

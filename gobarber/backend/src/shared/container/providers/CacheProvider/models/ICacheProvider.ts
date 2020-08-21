export default interface ICacheProvider {
  save(key: string, value: any): Promise<void>;
  recover<T>(key: string): Promise<T | null>;
  inavalidate(key: string): Promise<void>;
  inavalidatePrefix(prefix: string): Promise<void>;
}

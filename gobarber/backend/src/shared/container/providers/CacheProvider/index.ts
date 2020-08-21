import { container } from 'tsyringe';
import ICacheProvider from './models/ICacheProvider';
import RedisChacheProvider from './implementations/RedisCacheProvider';

const providers = {
  redis: RedisChacheProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);

import { useMemo } from 'react';
import {
  itemApi,
  useGetItemsQuery,
  useLazyGetItemsQuery,
} from '../services/api-service';
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';

const Application = () => {
  // const { data, isLoading, isFetching } = useGetItemsQuery(undefined, {
  //   pollingInterval: 5000, // refetch the data every 5 seconds
  // });

  const [trigger, { data, isLoading, isFetching }] = useLazyGetItemsQuery({
    pollingInterval: 5000,
  });

  const items = useMemo(() => data?.items || [], [data]);

  return (
    <main className="relative flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
      <Header count={0} />
      <button onClick={() => trigger()}>Fetch Data</button>
      {/* {isLoading && <span className="animate-pulse">Loading ..</span>} */}
      {isFetching && (
        <span className="absolute text-center inset-x-0 text-lg text-slate-800 font-bold animate-pulse">
          Fetching ..
        </span>
      )}
      <NewItem />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList title="Unpacked Items" items={items} />
        {/* <ItemList title="Packed Items" /> */}
      </section>

      <MarkAllAsUnpacked />
    </main>
  );
};

export default Application;

import Head from 'next/head';

export default function UnlimitedBathing() {
  return (
    <>
      <Head>
        <title>Unlimited Bathing Membership - Pawradise Estero</title>
        <meta name="description" content="Unlimited dog baths, nail trims, ear cleaning and more for just $49/month in Estero, FL." />
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Unlimited Bathing Membership</h1>
        <p className="mb-2">For just $49/month, your dog gets:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Bath</li>
          <li>Nail Trimming</li>
          <li>Ear Cleaning</li>
          <li>Teeth Brushing</li>
          <li>Towel Drying</li>
        </ul>
        <p>Want blow-drying or tidy trims? Just add one of our grooming add-on packages!</p>
      </main>
    </>
  );
}

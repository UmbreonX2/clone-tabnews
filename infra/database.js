// import { Pool } from 'pg';


// const pool = new Pool({
//   host: process.env.POSTGRES_HOST,
//   port: process.env.POSTGRES_PORT,
//   user: process.env.POSTGRES_USER,
//   database: process.env.POSTGRES_DB,
//   password: process.env.POSTGRES_PASSWORD
// });

// async function query(queryObject) {
//   const client = await pool.connect();

//   try {
//     const result = await pool.query(queryObject);
//     return result;
//   } catch (err) {
//     console.error(err);
//   } finally {
//     client.release();
//   }
// }

// export default {
//   query: query,
// };

import { Client } from 'pg';

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD
  });

  await client.connect();
  try {
    const result = await client.query(queryObject);
    return result;
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
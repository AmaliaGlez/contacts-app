import mongoose, { ClientSession } from 'mongoose';

const conn = mongoose.connection;

/**
 * Wraps a function in a transaction.
 * Caution. This will only work in replica sets.
 */
export async function transact<T>(callback: (session: ClientSession) => T): Promise<T> {
  const session = await conn.startSession();
  session.startTransaction();
  try {
    const result = await callback(session);
    await session.commitTransaction();
    session.endSession();
    return result;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
}

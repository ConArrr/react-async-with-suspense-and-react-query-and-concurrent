import ky, { Options } from 'ky'
import { isUsers, User } from '../models/user'
import { DEFAULT_API_OPTIONS } from './config'

const getMembers = async (
  orgCode: string,
  options?: Options,
): Promise<User[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  }

  const response = await ky.get(`orgs/${orgCode}/members`, mergedOptions)
  const members = (await response.json()) as unknown[]

  if (!isUsers(members)) {
    throw Error('API type error')
  }

  return members
}

export default getMembers

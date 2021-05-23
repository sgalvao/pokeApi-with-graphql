import { mergeTypeDefs } from '@graphql-tools/merge'

import pokeDef from "./pokemon"

export default mergeTypeDefs( [
  pokeDef]
)

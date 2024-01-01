import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(".");

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://next-test-grapqhl.eu.saleor.cloud/graphql/',
	documents: "graphql/**/*.ts",
	watch: true,
	generates: {
		"generated/graqhql.ts": {
			preset: 'import-types',
			plugins: ["typescript", 'typescript-operations', "typescript-react-apollo"],
			presetConfig: {
				typesPath: 'types.ts',
				gqlTagName: "gql",
				fragmentMasking: false
			},
			config: {
				useTypeImports: true,
				skipTypename: true,
				enumsAsTypes: true,
				defaultScalarType: "unknown",
				documentMode: "string",
			},

		},
	},
};

export default config;
import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(".");

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://trial.saleor.cloud/graphql/',
	documents: "graphql/**/*.ts",
	watch: true,
	generates: {
		"generated/graphql.tsx": {
			plugins: [
				"typescript",
				"typescript-operations",
				"typed-document-node"
			],
			presetConfig: {
				gqlTagName: "gql",
				fragmentMasking: false,
			},
			config: {
				useTypeImports: true,
				skipTypename: true,
				enumsAsTypes: true,
				defaultScalarType: "unknown",
			},

		},
	},
};

export default config;
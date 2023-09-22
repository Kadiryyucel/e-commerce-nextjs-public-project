import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(".");

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://self-ecommerce.saleor.cloud/graphql/',
	documents: "graphql/**/*.ts",
	watch:true,
	generates: {
		"generated/": {
			preset: "client",
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-react-apollo"
			  ],
			config: {
				useTypeImports: true,
				skipTypename: true,
				enumsAsTypes: true,
				defaultScalarType: "unknown",
				documentMode: "string",
			},
			presetConfig: {
				gqlTagName: "gql",
				fragmentMasking: false,
			},
		},
	},
};

export default config;
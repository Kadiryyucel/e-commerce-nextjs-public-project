import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(".");

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://self-ecommerce.saleor.cloud/graphql/',
	documents: "graphql/**/*.graphql",
	generates: {
		"generated/": {
			preset: "client",
			config: {
				useTypeImports: true,
				skipTypename: true,
				enumsAsTypes: true,
				defaultScalarType: "unknown",
				documentMode: "string",
			},
			presetConfig: {
				fragmentMasking: false,
			},
		},
	},
};

export default config;
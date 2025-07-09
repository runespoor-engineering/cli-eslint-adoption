import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		pool: "threads",
		coverage: {
			provider: "v8",
			reporter: ["text", "json-summary", "html", "lcov"],
		},
		reporters: process.env.GITHUB_ACTIONS
			? ["default", "github-actions"]
			: ["default", "html"],
	},
});

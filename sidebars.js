// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  build: [
    {
      type: "category",
      label: "Getting started",
      items: [
        {
          type: "doc",
          label: "Overview of ICP",
          id: "developer-docs/getting-started/overview-of-icp",
        },
        {
          type: "doc",
          label: "Development workflow",
          id: "developer-docs/getting-started/development-workflow",
        },
        {
          type: "doc",
          label: "Installing tools",
          id: "developer-docs/getting-started/install/index",
        },
        {
          type: "doc",
          label: "Hello, world!",
          id: "developer-docs/getting-started/hello-world",
        },
        {
          type: "doc",
          label: "Developer accounts",
          id: "developer-docs/getting-started/accounts",
        },
        {
          type: "category",
          label: "Cycles",
          items: [
            {
              label: "Overview",
              type: "doc",
              id: "developer-docs/getting-started/cycles/overview",
            },
            "developer-docs/getting-started/cycles/cycles-faucet",
          ],
        },
        {
          type: "doc",
          label: "Default project template",
          id: "developer-docs/getting-started/default-template",
        },
        {
          type: "category",
          label: "Deploy smart contracts",
          items: [
            {
              type: "doc",
              label: "Local deployment",
              id: "developer-docs/getting-started/deploy/local",
            },
            {
              type: "doc",
              label: "Testnet deployment",
              id: "developer-docs/getting-started/deploy/testnet",
            },
            {
              type: "doc",
              label: "Mainnet deployment",
              id: "developer-docs/getting-started/deploy/mainnet",
            },
          ],
        },
        {
          type: "category",
          label: "Quickstart guides",
          items: [
            {
              type: "doc",
              label: "Quickstart for React developers",
              id: "developer-docs/getting-started/quickstart/react-quickstart",
            },
            {
              type: "doc",
              label: "Juno quickstart",
              id: "developer-docs/getting-started/quickstart/juno-quickstart",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Smart contracts",
      items: [
        {
          type: "category",
          label: "Overview",
          items: [
            "developer-docs/smart-contracts/overview/introduction",
            "developer-docs/smart-contracts/overview/inside-canisters",
            "developer-docs/smart-contracts/overview/canister-lifecycle",
            "developer-docs/smart-contracts/overview/trust-in-canisters",
          ],
        },
        {
          type: "category",
          label: "Write",
          items: [
            {
              label: "Overview",
              type: "doc",
              id: "developer-docs/smart-contracts/write/overview",
            },
            "developer-docs/smart-contracts/write/resources",
          ],
        },
        {
          type: "doc",
          label: "Create",
          id: "developer-docs/smart-contracts/create",
        },
        {
          type: "doc",
          label: "Compile",
          id: "developer-docs/smart-contracts/compile",
        },
        {
          type: "doc",
          label: "Install",
          id: "developer-docs/smart-contracts/install",
        },
        {
          type: "category",
          label: "Deploy",
          items: [
            {
              label: "Overview",
              type: "doc",
              id: "developer-docs/smart-contracts/deploy/overview",
            },
            "developer-docs/smart-contracts/deploy/custom-testnets",
          ],
        },
        {
          type: "category",
          label: "Call",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "developer-docs/smart-contracts/call/overview",
            },
            {
              type: "doc",
              label: "Passing in arguments",
              id: "developer-docs/smart-contracts/call/arguments",
            },
            {
              type: "category",
              label: "Candid",
              items: [
                "developer-docs/smart-contracts/candid/candid-concepts",
                "developer-docs/smart-contracts/candid/candid-howto",
                "developer-docs/smart-contracts/candid/candid-tools",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Cost",
          items: [
            "developer-docs/gas-cost",
            "developer-docs/cost-estimations-and-examples",
          ],
        },
        {
          type: "category",
          label: "Maintain",
          items: [
            "developer-docs/smart-contracts/maintain/control",
            "developer-docs/smart-contracts/maintain/delete",
            "developer-docs/smart-contracts/maintain/history",
            "developer-docs/smart-contracts/maintain/import",
            "developer-docs/smart-contracts/maintain/logs",
            "developer-docs/smart-contracts/maintain/recovery",
            "developer-docs/smart-contracts/maintain/resource-limits",
            "developer-docs/smart-contracts/maintain/snapshots",
            "developer-docs/smart-contracts/maintain/state",
            "developer-docs/smart-contracts/maintain/settings",
            "developer-docs/smart-contracts/maintain/storage",
            "developer-docs/smart-contracts/maintain/trapping",
            "developer-docs/smart-contracts/maintain/upgrade",
            {
              type: "category",
              label: "Topping up canisters",
              items: [
                "developer-docs/smart-contracts/topping-up/topping-up-canister",
                "developer-docs/smart-contracts/topping-up/cycles_management_services",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Test",
          items: [
            {
              label: "Overview",
              type: "doc",
              id: "developer-docs/smart-contracts/test/overview",
            },
            "developer-docs/smart-contracts/test/pocket-ic",
            "developer-docs/smart-contracts/test/troubleshooting",
          ],
        },
        {
          type: "category",
          label: "Advanced features",
          items: [
            {
              type: "doc",
              label: "Async code and inter-canister calls",
              id: "developer-docs/smart-contracts/advanced-features/async-code",
            },
            {
              type: "doc",
              label: "Composite queries",
              id: "developer-docs/smart-contracts/advanced-features/composite-query",
            },
            {
              type: "category",
              label: "Incoming HTTP requests",
              items: [
            {
              type: "doc",
              label: "GET/POST requests",
              id: "developer-docs/smart-contracts/advanced-features/handling-get-post-requests",
            },
            {
              type: "doc",
              label: "Serving requests",
              id: "developer-docs/smart-contracts/advanced-features/serving-http-request",
            },
            {
              type: "doc",
              label: "HTTP gateways",
              id: "developer-docs/smart-contracts/advanced-features/http-gateways",
            },
            ],
            },
            {
              type: "category",
              label: "HTTPS outcalls",
              items: [
                {
                  label: "Overview",
                  type: "doc",
                  id: "developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-overview",
                },
                "developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-how-to-use",
                "developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-get",
                "developer-docs/smart-contracts/advanced-features/https-outcalls/https-outcalls-post",
              ],
            },
            {
              type: "category",
              label: "HTTP certification",
              items: [
                {
                  type: "doc",
                  id: "developer-docs/web-apps/http-compatible-canisters/custom-http-canisters",
                  label: "Custom HTTP canisters",
                },
                {
                  type: "doc",
                  id: "developer-docs/web-apps/http-compatible-canisters/serving-json-over-http",
                  label: "Serving JSON over HTTP",
                },
                {
                  type: "doc",
                  id: "developer-docs/web-apps/http-compatible-canisters/serving-static-assets-over-http",
                  label: "Serving static assets over HTTP",
                },
              ],
            },
            {
              type: "doc",
              label: "Management canister",
              id: "developer-docs/smart-contracts/advanced-features/management-canister",
            },
            {
              type: "category",
              label: "Onchain encryption: vetKeys",
              items: [
                "developer-docs/smart-contracts/encryption/vetkeys",
                "developer-docs/smart-contracts/encryption/using-vetkeys",
              ],
            },
            {
              type: "doc",
              label: "Onchain randomness",
              id: "developer-docs/smart-contracts/advanced-features/randomness",
            },
            {
              type: "category",
              label: "Onchain signatures",
              items: [
                "developer-docs/smart-contracts/signatures/t-ecdsa",
                "developer-docs/smart-contracts/signatures/t-schnorr",
                {
                  type: "category",
                  label: "Signing messages",
                  items: [
                    "developer-docs/smart-contracts/signatures/signing-messages-t-ecdsa",
                    "developer-docs/smart-contracts/signatures/signing-messages-t-schnorr",
                  ],
                },
              ],
            },
            "developer-docs/smart-contracts/advanced-features/periodic-tasks",
            "developer-docs/smart-contracts/advanced-features/query-stats",
            "developer-docs/smart-contracts/advanced-features/simd",
            "developer-docs/smart-contracts/advanced-features/system-canisters",
            "developer-docs/smart-contracts/advanced-features/time-and-timestamps",
          ],
        },
        {
          type: "category",
          label: "Best practices",
          items: [
            {
              type: "doc",
              label: "General",
              id: "developer-docs/smart-contracts/best-practices/general",
            },
            {
              type: "doc",
              label: "Reproducible builds",
              id: "developer-docs/smart-contracts/best-practices/reproducible-builds",
            },
            {
              type: "doc",
              label: "Storage",
              id: "developer-docs/smart-contracts/best-practices/storage",
            },
            {
              type: "doc",
              label: "Troubleshooting latency",
              id: "developer-docs/smart-contracts/best-practices/troubleshooting",
            },
            {
              type: "doc",
              label: "Safe retries & idempotency",
              id: "developer-docs/smart-contracts/best-practices/idempotency",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Developer tools",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "developer-docs/developer-tools/dev-tools-overview",
        },
        {
          type: "category",
          label: "Command line",
          items: [
            {
              type: "category",
              label: "dfx",
              link: {
                type: "doc",
                id: "developer-docs/developer-tools/cli-tools/cli-reference/index",
              },
              items: [
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-parent",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-bootstrap",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-build",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-cache",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-canister",
		            "developer-docs/developer-tools/cli-tools/cli-reference/dfx-completion",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-cycles",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-deploy",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-deps",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-generate",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-help",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-identity",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-info",
		            "developer-docs/developer-tools/cli-tools/cli-reference/dfx-killall",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-ledger",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-new",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-nns",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-ping",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-quickstart",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-replica",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-schema",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-sns",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-start",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-stop",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-upgrade",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-wallet",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-envars",
                "developer-docs/developer-tools/cli-tools/dfx-json",
                "developer-docs/developer-tools/cli-tools/dfx-json-reference",
                {
                  type: "category",
                  label: "Advanced dfx workflows",
                  items: [
                    "developer-docs/developer-tools/cli-tools/advanced-dfx/check-chunk-store",
                    "developer-docs/developer-tools/cli-tools/advanced-dfx/dfx-migration",
                    "developer-docs/developer-tools/cli-tools/advanced-dfx/init-args",
                    "developer-docs/developer-tools/cli-tools/advanced-dfx/networks-json",
                    "developer-docs/developer-tools/cli-tools/advanced-dfx/specifying-replica-version",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "dfxvm",
              items: [
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfx/dfx",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-default",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-install",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm-init/dfxvm-init",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-list",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-self-uninstall",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-self-update",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-uninstall",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-update",
              ],
            },
            {
              type: "category",
              label: "quill",
              link: {
                type: "doc",
                id: "developer-docs/developer-tools/cli-tools/quill-cli-reference/index",
              },
              items: [
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-parent",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-account-balance",
                {
                  type: "category",
                  label: "quill ckbtc",
                  link: {
                    type: "doc",
                    id: "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc",
                  },
                  items: [
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-balance",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-retrieve-btc",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-retrieve-btc-status",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-transfer",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-update-balance",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-withdrawal-address",
                  ],
                },
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-claim-neurons",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-generate",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-get-neuron-info",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-get-proposal-info",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-list-neurons",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-list-proposals",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-neuron-manage",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-neuron-stake",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-public-ids",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-qr-code",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-replace-node-provider-id",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-scanner-qr-code",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-send",
                {
                  type: "category",
                  label: "quill sns",
                  link: {
                    type: "doc",
                    id: "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns",
                  },
                  items: [
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-balance",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-configure-dissolve-delay",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-disburse",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-disburse-maturity",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-follow-neuron",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-get-sale-participation",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-get-swap-refund",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-list-deployed-snses",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-make-proposal",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-make-upgrade-canister-proposal",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-neuron-permission",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-new-sale-ticket",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-pay",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-register-vote",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-split-neuron",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-stake-maturity",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-stake-neuron",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-status",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-transfer",
                  ],
                },
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-transfer",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-update-node-provider",
              ],
            },
            "developer-docs/developer-tools/cli-tools/ic-admin",
            "developer-docs/developer-tools/cli-tools/idl2json",
          ],
        },
        {
          type: "category",
          label: "Off-chain libraries",
          items: [
            {
              type: "category",
              label: "Agents",
              items: [
                {
                  label: "Overview",
                  type: "doc",
                  id: "developer-docs/developer-tools/off-chain/agents/overview",
                },
                "developer-docs/developer-tools/off-chain/agents/javascript-agent",
                "developer-docs/developer-tools/off-chain/agents/nodejs",
                "developer-docs/developer-tools/off-chain/agents/rust-agent",
              ],
            },
            "developer-docs/developer-tools/off-chain/canpack",
            "developer-docs/developer-tools/off-chain/canbench",
          ],
        },
        {
          type: "category",
          label: "Onchain libraries",
          items: [
            "developer-docs/developer-tools/on-chain/cdks",
            "developer-docs/developer-tools/on-chain/ic-js",
          ],
        },
        {
          type: "category",
          label: "IDE",
          items: [
            "developer-docs/developer-tools/ide/icp-ninja",
            "developer-docs/developer-tools/ide/vs-code",
            "developer-docs/developer-tools/ide/playground",
            "developer-docs/developer-tools/ide/gitpod",
            "developer-docs/developer-tools/ide/codespaces",
            "developer-docs/developer-tools/ide/dev-containers",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Web apps",
      items: [
        {
          type: "category",
          label: "Application frontends",
          items: [
            {
              label: "Overview",
              type: "doc",
              id: "developer-docs/web-apps/application-frontends/overview",
            },
            "developer-docs/web-apps/application-frontends/default-frontend",
            "developer-docs/web-apps/application-frontends/add-stylesheet",
            "developer-docs/web-apps/application-frontends/existing-frontend",
            "developer-docs/web-apps/application-frontends/asset-security",
            "developer-docs/web-apps/application-frontends/webpack",
          ],
        },
        {
          type: "category",
          label: "Browser JS",
          items: [
            "developer-docs/web-apps/browser-js/js-frameworks",
            "developer-docs/web-apps/browser-js/js-request-api",
          ],
        },
        {
          type: "category",
          label: "Frameworks",
          items: ["developer-docs/web-apps/frameworks/juno"],
        },
        {
          type: "category",
          label: "Custom domains",
          items: [
            "developer-docs/web-apps/custom-domains/dns-setup",
            "developer-docs/web-apps/custom-domains/using-custom-domains",
          ],
        },
        "developer-docs/web-apps/design-dapps",
        "developer-docs/web-apps/independently-verifying-ic-signatures",
        "developer-docs/web-apps/obtain-verify-ic-pubkey",
      ],
    },
    {
      type: "category",
      label: "Security",
      items: [
        {
          type: "category",
          label: "Security best practices",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "developer-docs/security/security-best-practices/overview",
            },
            {
              type: "doc",
              label: "Inter-canister calls",
              id: "developer-docs/security/security-best-practices/inter-canister-calls",
            },
            {
              type: "doc",
              label: "Identity and access management",
              id: "developer-docs/security/security-best-practices/iam",
            },
            {
              type: "doc",
              label: "Decentralization",
              id: "developer-docs/security/security-best-practices/decentralization",
            },
            {
              type: "doc",
              label: "Data integrity and authenticity",
              id: "developer-docs/security/security-best-practices/data-integrity-and-authenticity",
            },
            {
              type: "doc",
              label: "Data storage",
              id: "developer-docs/security/security-best-practices/data-storage",
            },
            {
              type: "doc",
              label: "HTTP outcalls",
              id: "developer-docs/security/security-best-practices/https-outcalls",
            },
            {
              type: "doc",
              label: "Denial of service",
              id: "developer-docs/security/security-best-practices/dos",
            },
            {
              type: "doc",
              label: "Canister upgrades",
              id: "developer-docs/security/security-best-practices/canister-upgrades",
            },
            {
              type: "doc",
              label: "Observability and monitoring",
              id: "developer-docs/security/security-best-practices/observability-and-monitoring",
            },
            {
              type: "doc",
              label: "Miscellaneous",
              id: "developer-docs/security/security-best-practices/misc",
            },
            {
              type: "doc",
              label: "Important resources",
              id: "developer-docs/security/security-best-practices/resources",
            },
          ],
        },
        {
          type: "doc",
          label: "Formal verification",
          id: "developer-docs/security/formal-verification",
        },
      ],
    },
    {
      type: "category",
      label: "Chain Fusion",
      items: [
        {
          label: "Overview",
          type: "doc",
          id: "developer-docs/multi-chain/overview",
        },
        "developer-docs/multi-chain/supported-chains",
        {
          type: "category",
          label: "Bitcoin",
          items: [
            {
              label: "Overview",
              type: "doc",
              id: "developer-docs/multi-chain/bitcoin/overview",
            },
            "developer-docs/multi-chain/bitcoin/using-btc/btc-comparison",
            "developer-docs/multi-chain/bitcoin/using-btc/btc-dev-workflow",
            {
              type: "category",
              label: "Interacting with Bitcoin",
              items: [
                "developer-docs/multi-chain/bitcoin/using-btc/generate-addresses",
                "developer-docs/multi-chain/bitcoin/using-btc/create-transactions",
                "developer-docs/multi-chain/bitcoin/using-btc/sign-transactions",
                "developer-docs/multi-chain/bitcoin/using-btc/submit-transactions",
                "developer-docs/multi-chain/bitcoin/using-btc/read-state",
                "developer-docs/multi-chain/bitcoin/using-btc/ordinals",
                "developer-docs/multi-chain/bitcoin/using-btc/runes",
                "developer-docs/multi-chain/bitcoin/using-btc/local-development",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Ethereum",
          items: [
            {
              label: "Overview",
              type: "doc",
              id: "developer-docs/multi-chain/ethereum/overview",
            },
            "developer-docs/multi-chain/ethereum/using-eth/eth-comparison",
            "developer-docs/multi-chain/ethereum/using-eth/eth-dev-workflow",
            {
              type: "category",
              label: "Interacting with Ethereum",
              items: [
                "developer-docs/multi-chain/ethereum/using-eth/generating-addresses",
                "developer-docs/multi-chain/ethereum/using-eth/signing-transactions",
                "developer-docs/multi-chain/ethereum/using-eth/submit-transactions",
              ],
            },
            {
              type: "category",
              label: "EVM RPC canister",
              items: [
                {
                  label: "Overview",
                  type: "doc",
                  id: "developer-docs/multi-chain/ethereum/evm-rpc/overview",
                },
                "developer-docs/multi-chain/ethereum/evm-rpc/how-it-works",
                "developer-docs/multi-chain/ethereum/evm-rpc/evm-rpc-canister",
                "developer-docs/multi-chain/ethereum/evm-rpc/costs",
                "developer-docs/multi-chain/ethereum/evm-rpc/samples",
              ],
            },
          ],
        },
        "developer-docs/multi-chain/examples",
        {
          type: "category",
          label: "Chain-key tokens",
          items: [
            "developer-docs/multi-chain/chain-key-tokens/overview",
            {
              type: "category",
              label: "ckBTC",
              items: [
                {
                  label: "Overview",
                  type: "doc",
                  id: "developer-docs/multi-chain/chain-key-tokens/ckbtc/overview",
                },
                "developer-docs/multi-chain/chain-key-tokens/ckbtc/making-transactions",
                "developer-docs/multi-chain/chain-key-tokens/ckbtc/using-ckbtc-in-dapps",
              ],
            },
            {
              type: "category",
              label: "ckETH",
              items: [
                {
                  label: "Overview",
                  type: "doc",
                  id: "developer-docs/multi-chain/chain-key-tokens/cketh/overview",
                },
                "developer-docs/multi-chain/chain-key-tokens/cketh/making-transactions",
                "developer-docs/multi-chain/chain-key-tokens/cketh/using-cketh-in-dapps",
              ],
            },
            {
              type: "category",
              label: "ckERC20",
              items: [
                {
                  label: "Overview",
                  type: "doc",
                  id: "developer-docs/multi-chain/chain-key-tokens/ckerc20/overview",
                },
                "developer-docs/multi-chain/chain-key-tokens/ckerc20/making-transactions",
                "developer-docs/multi-chain/chain-key-tokens/ckerc20/using-ckerc20-in-dapps",
                "developer-docs/multi-chain/chain-key-tokens/ckerc20/creating-new-ckerc20",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Identity",
      items: [
        {
          type: "category",
          label: "Authentication",
          items: [
            {
              label: "Overview",
              type: "doc",
              id: "developer-docs/identity/authentication/overview",
            },

            {
              type: "category",
              label: "Internet Identity (II)",
              items: [
                {
                  label: "Overview",
                  type: "doc",
                  id: "developer-docs/identity/internet-identity/overview",
                },
                "developer-docs/identity/internet-identity/creating-ii",
                "developer-docs/identity/internet-identity/integrate-internet-identity",
                "developer-docs/identity/internet-identity/alternative-origins",
              ],
            },
            "developer-docs/identity/authentication/email-password",
            "developer-docs/identity/authentication/nfid",
            "developer-docs/identity/authentication/siwb",
            "developer-docs/identity/authentication/siwe",
            "developer-docs/identity/authentication/siws",
            "developer-docs/identity/authentication/msq",
          ],
        },
        {
          type: "category",
          label: "Verifiable credentials",
          items: [
            {
              label: "Overview",
              type: "doc",
              id: "developer-docs/identity/verifiable-credentials/overview",
            },
            "developer-docs/identity/verifiable-credentials/how-it-works",
            "developer-docs/identity/verifiable-credentials/issuer",
            "developer-docs/identity/verifiable-credentials/relying-party",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Digital assets",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "developer-docs/defi/overview",
        },
        {
          type: "category",
          label: "Tokens",
          items: [
	          "developer-docs/defi/tokens/token-standards",
	          "developer-docs/defi/tokens/asset_flow/index",
            {
              type: "category",
              label: "Ledgers",
              items: [
                   {
                      type: "doc",
                      label: "Overview",
                      id: "developer-docs/defi/tokens/ledger/overview",
                    },
                {
                  type: "category",
                  label: "Setup",
                  link: {
                    type: "doc",
                    id: "developer-docs/defi/tokens/ledger/setup/overview",
                  },
                  items: [
                    "developer-docs/defi/tokens/ledger/setup/icp_ledger_setup",
                    "developer-docs/defi/tokens/ledger/setup/icrc1_ledger_setup"
                  ],
                },
                {
                  type: "category",
                  label: "Usage",
                  link: {
                    type: "doc",
                    id: "developer-docs/defi/tokens/ledger/usage/overview",
                  },
                  items: [
                    "developer-docs/defi/tokens/ledger/usage/icp_ledger_usage",
                    "developer-docs/defi/tokens/ledger/usage/icrc1_ledger_usage"
                  ],
                },
                "developer-docs/defi/tokens/advanced/direct_integration",
              ],
            },
            "developer-docs/defi/tokens/indexes",
            "developer-docs/defi/icp-tokens/account-trimming",
            "developer-docs/defi/tokens/create",
            {
              type: "category",
              label: "Cycles",
              items: [
                "developer-docs/defi/cycles/cycles-ledger",
                "developer-docs/defi/cycles/cycles-wallet",
                "developer-docs/defi/cycles/converting_icp_tokens_into_cycles",
              ]
            },
            {
              type: "category",
              label: "Advanced",
              items: [
                {
                  type: "category",
                  label: "ICP Rosetta implementation",
                  link: {
                    type: "doc",
                    id: "developer-docs/defi/rosetta/icp_rosetta/index",
                  },
                  items: [
                    {
                      type: "category",
                      label: "Data API",
                      link: {
                        type: "doc",
                        id: "developer-docs/defi/rosetta/icp_rosetta/data_api/index",
                      },
                      items: [
                        "developer-docs/defi/rosetta/icp_rosetta/data_api/network",
                        "developer-docs/defi/rosetta/icp_rosetta/data_api/balances",
                        "developer-docs/defi/rosetta/icp_rosetta/data_api/blocks",
                        "developer-docs/defi/rosetta/icp_rosetta/data_api/transactions",
                        "developer-docs/defi/rosetta/icp_rosetta/data_api/list_known_neurons",
                        "developer-docs/defi/rosetta/icp_rosetta/data_api/get_pending_proposals",
                        "developer-docs/defi/rosetta/icp_rosetta/data_api/get_proposal_info",
                      ],
                    },
                    {
                      type: "category",
                      label: "Construction API",
                      link: {
                        type: "doc",
                        id: "developer-docs/defi/rosetta/icp_rosetta/construction_api/index",
                      },
                      items: [
                        {
                          type: "category",
                          label: "Flow of operations",
                          link: {
                            type: "doc",
                            id: "developer-docs/defi/rosetta/icp_rosetta/construction_api/operations_flow/index",
                          },
                          items: [
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/operations_flow/derive",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/operations_flow/preprocess",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/operations_flow/metadata",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/operations_flow/payloads",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/operations_flow/combine",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/operations_flow/submit",
                          ],
                        },
                        {
                          type: "category",
                          label: "Staking and neuron management",
                          link: {
                            type: "doc",
                            id: "developer-docs/defi/rosetta/icp_rosetta/construction_api/staking/index",
                          },
                          items: [
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/staking/neuron_info",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/staking/derive_neuron_id",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/staking/stake_icp",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/staking/lock_neuron",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/staking/dissolve",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/staking/stake_maturity",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/staking/change_auto_stake_maturity",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/staking/spawn",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/staking/disburse",
                          ],
                        },
                        {
                          type: "category",
                          label: "Voting and following",
                          link: {
                            type: "doc",
                            id: "developer-docs/defi/rosetta/icp_rosetta/construction_api/voting/index",
                          },
                          items: [
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/voting/vote",
                            "developer-docs/defi/rosetta/icp_rosetta/construction_api/voting/follow",
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "category",
                  label: "ICRC Rosetta implementation",
                  link: {
                    type: "doc",
                    id: "developer-docs/defi/rosetta/icrc_rosetta/index",
                  },
                  items: [
                    {
                      type: "category",
                      label: "Data API",
                      link: {
                        type: "doc",
                        id: "developer-docs/defi/rosetta/icrc_rosetta/data_api/index",
                      },
                      items: [
                        "developer-docs/defi/rosetta/icrc_rosetta/data_api/network",
                        "developer-docs/defi/rosetta/icrc_rosetta/data_api/balances",
                        "developer-docs/defi/rosetta/icrc_rosetta/data_api/blocks",
                        "developer-docs/defi/rosetta/icrc_rosetta/data_api/transactions",
                      ],
                    },
                    {
                      type: "category",
                      label: "Construction API",
                      link: {
                        type: "doc",
                        id: "developer-docs/defi/rosetta/icrc_rosetta/construction_api/index",
                      },
                      items: [
                        {
                          type: "category",
                          label: "Asset transfer",
                          link: {
                            type: "doc",
                            id: "developer-docs/defi/rosetta/icrc_rosetta/construction_api/asset_transfer/index",
                          },
                          items: [
                            "developer-docs/defi/rosetta/icrc_rosetta/construction_api/asset_transfer/transfer",
                            "developer-docs/defi/rosetta/icrc_rosetta/construction_api/asset_transfer/approve",
                          ],
                        },
                      ],
                    },
                  ],
                },

                {
                  type: "doc",
                  label: "Exchange rate canister",
                  id: "developer-docs/defi/exchange-rate-canister",
                },
              ]
            }
          ],
        },
        {
          type: "category",
          label: "NFTs",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "developer-docs/defi/nfts/overview",
            },
            "developer-docs/defi/nfts/nft-collections",
            "developer-docs/defi/nfts/marketplaces"
          ],
        },
        {
          type: "category",
          label: "Decentralized exchanges",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "developer-docs/defi/dex/overview",
            }
          ],
        },
        {
          type: "category",
          label: "Wallets",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "developer-docs/defi/wallets/overview",
            },
              "developer-docs/defi/wallets/self-custody/self-custody-quickstart",
              "developer-docs/defi/wallets/self-custody/hardware-wallet-cli",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Decentralized AI",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "developer-docs/ai/overview",
        },
        {
          type: "category",
          label: "Inference",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "developer-docs/ai/inference",
            },
            "developer-docs/ai/samples",
            ],
          },
          "developer-docs/ai/training-models",
        ],
      },
    {
      type: "category",
      label: "Governance",
      items: [
        {
          type: "category",
          label: "Network Nervous System (NNS)",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "developer-docs/daos/nns/overview",
            },
            {
              type: "category",
              label: "Using the NNS dapp",
              items: [
                "developer-docs/daos/nns/using-the-nns-dapp/nns-app-quickstart",
                "developer-docs/daos/nns/using-the-nns-dapp/nns-dapp-send-and-receive-tokens",
                "developer-docs/daos/nns/using-the-nns-dapp/nns-dapp-importing-tokens",
                "developer-docs/daos/nns/using-the-nns-dapp/nns-dapp-staking-a-neuron",
                "developer-docs/daos/nns/using-the-nns-dapp/nns-dapp-voting-on-proposals",
                "developer-docs/daos/nns/using-the-nns-dapp/nns-dapp-following-other-neurons",
                "developer-docs/daos/nns/using-the-nns-dapp/nns-dapp-advanced-neuron-operations",
                "developer-docs/daos/nns/using-the-nns-dapp/nns-dapp-manage-quill-neurons",
                "developer-docs/daos/nns/using-the-nns-dapp/nns-dapp-additional-features",
              ],
            },
            {
              type: "category",
              label: "Concepts",
              items: [
              {
                type: "category",
                label: "Neurons",
                items: [
                  "developer-docs/daos/nns/concepts/neurons/neuron-overview",
                  "developer-docs/daos/nns/concepts/neurons/neuron-following",
                  "developer-docs/daos/nns/concepts/neurons/staking-voting-rewards",
                  "developer-docs/daos/nns/concepts/neurons/neuron-management",
                  "developer-docs/daos/nns/concepts/neurons/becoming-a-known-neuron",
                ],
              },
              {
                type: "category",
                label: "Proposals",
                items: [
                  "developer-docs/daos/nns/concepts/proposals/proposal-overview",
                  "developer-docs/daos/nns/concepts/proposals/direct-voting",
                  "developer-docs/daos/nns/concepts/proposals/proposal-topics",
                  "developer-docs/daos/nns/concepts/proposals/verify-proposals",
                  "developer-docs/daos/nns/concepts/proposals/proposal-submit",
                ],
              },
            "developer-docs/daos/nns/concepts/neurons-fund",
          ],
        },
        ],
        },
        {
          type: "category",
          label: "Service Nervous System (SNS)",
          link: {
            type: "doc",
            id: "developer-docs/daos/sns/index",
          },
          items: [
            {
              label: "Overview",
              type: "doc",
              id: "developer-docs/daos/sns/overview",
            },
            {
              type: "category",
              label: "Before an SNS launch",
              link: {
                type: "doc",
                id: "developer-docs/daos/sns/tokenomics/index",
              },
              items: [
                "developer-docs/daos/sns/tokenomics/predeployment-considerations",
                "developer-docs/daos/sns/tokenomics/tokenomics-intro",
                "developer-docs/daos/sns/tokenomics/rewards",
                "developer-docs/daos/sns/tokenomics/preparation",
                "developer-docs/daos/sns/tokenomics/sns-checklist",
              ],
            },
            {
              type: "category",
              label: "Launching an SNS",
              link: {
                type: "doc",
                id: "developer-docs/daos/sns/launching/index",
              },
              items: [
                "developer-docs/daos/sns/launching/launch-summary-1proposal",
                "developer-docs/daos/sns/launching/launch-steps-1proposal",
                "developer-docs/daos/sns/launching/integrating",
              ],
            },
            {
              type: "category",
              label: "Testing an SNS",
              link: {
                type: "doc",
                id: "developer-docs/daos/sns/testing/testing-before-launch",
              },
              items: [
                "developer-docs/daos/sns/testing/testing-locally",
                "developer-docs/daos/sns/testing/testing-on-mainnet",
              ],
            },
            {
              type: "category",
              label: "Managing an SNS",
              link: {
                type: "doc",
                id: "developer-docs/daos/sns/managing/manage-sns-intro",
              },
              items: [
                "developer-docs/daos/sns/managing/making-proposals",
                "developer-docs/daos/sns/managing/cycles-usage",
                "developer-docs/daos/sns/managing/sns-asset-canister",
                "developer-docs/daos/sns/managing/managing-nervous-system-parameters",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Sample apps",
      items: [
        "samples/overview",
        {
          type: "category",
          label: "Hosting",
          items: [
            "references/samples/hosting/godot-html5-template/README",
            "references/samples/hosting/photo-storage/README",
            "references/samples/hosting/static-website/README",
            "references/samples/hosting/unity-webgl-template/README",
          ],
        },
        {
          type: "category",
          label: "Motoko",
          items: [
            "references/samples/motoko/basic_bitcoin/README",
            "references/samples/motoko/basic_dao/README",
            "references/samples/motoko/cert-var/README",
            "references/samples/motoko/classes/README",
            "references/samples/motoko/composite_query/README",
            "references/samples/motoko/counter/README",
            {
              type: "doc",
              label: "CRUD example",
              id: "references/samples/motoko/superheroes/README",
            },
            "references/samples/motoko/encrypted-notes-dapp-vetkd/README",
            "references/samples/motoko/encrypted-notes-dapp/README",
            "references/samples/motoko/life/README",
            "references/samples/motoko/hello_cycles/README",
            "references/samples/motoko/send_http_get/README",
            "references/samples/motoko/send_http_post/README",
            "references/samples/motoko/ic-pos/README",
            "references/samples/motoko/icrc2-swap/README",
            "references/samples/motoko/internet_identity_integration/README",
            "references/samples/motoko/minimal-counter-dapp/README",
            "references/samples/motoko/parallel_calls/README",
            "references/samples/motoko/pub-sub/README",
            "references/samples/motoko/random_maze/README",
            "references/samples/motoko/threshold-ecdsa/README",
            "references/samples/motoko/token_transfer/README",
            "references/samples/motoko/token_transfer_from/README",
            "references/samples/motoko/vetkd/README",
          ],
        },
        {
          type: "category",
          label: "Rust",
          items: [
            "references/samples/rust/basic_bitcoin/README",
            "references/samples/rust/basic_dao/README",
            "references/samples/rust/canister-info/README",
            "references/samples/rust/composite_query/README",
            "references/samples/rust/counter/README",
            "references/samples/rust/defi/src/frontend/README",
	    "references/samples/rust/encrypted-notes-dapp-vetkd/README",
            "references/samples/rust/encrypted-notes-dapp/README",
            "references/samples/rust/icp_transfer/README",
            "references/samples/rust/nft-wallet/README",
            "references/samples/rust/parallel_calls/README",
            "references/samples/rust/performance_counters/README",
            "references/samples/rust/periodic_tasks/README",
            "references/samples/rust/pub-sub/README",
            "references/samples/rust/qrcode/README",
            "references/samples/rust/send_http_get/README",
            "references/samples/rust/send_http_post/README",
            "references/samples/rust/threshold-ecdsa/README",
            "references/samples/rust/token_transfer/README",
            "references/samples/rust/token_transfer_from/README",
            "references/samples/rust/vetkd/README",
          ],
        },
        {
          type: "category",
          label: "Native dapps",
          items: [
            "references/samples/native-apps/unity_ii_applink/README",
            "references/samples/native-apps/unity_ii_deeplink/README",
            "references/samples/native-apps/unity_ii_deeplink/ii_integration_dapp/README",
          ],
        },
        {
          type: "category",
          label: "Svelte",
          items: [
            "references/samples/svelte/svelte-motoko-starter/README",
            "references/samples/svelte/svelte-starter/README",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "References",
      items: [
        {
          type: "category",
          label: "Internet Computer specification",
          items: [
            "references/http-gateway-protocol-spec",
            "references/ic-interface-spec",
            "references/id-encoding-spec",
          ],
        },
        {
          type: "category",
          label: "Languages",
          items: [
            "references/candid-ref",
            {
              type: "link",
              label: "Motoko base library",
              href: "/docs/current/motoko/main/base/",
            },
            {
              type: "link",
              label: "Rust CDK references",
              href: "https://docs.rs/ic-cdk/",
            },
          ],
        },
        {
          type: "category",
          label: "Core services",
          items: [
            {
              type: "doc",
              label: "Asset canister",
              id: "references/asset-canister",
            },
            {
              type: "doc",
              label: "ICRC-1 token standard",
              id: "references/icrc1-standard",
            },
            {
              type: "doc",
              label: "Internet Identity",
              id: "references/ii-spec",
            },
            {
              type: "doc",
              label: "Ledger canister",
              id: "references/ledger",
            },
          ],
        },
        {
          type: "doc",
          label: "Execution errors",
          id: "references/execution-errors",
        },
        {
          type: "category",
          label: "Feature references",
          items: [
            "references/bitcoin-how-it-works",
            "references/ckbtc-reference",
            "references/https-outcalls-how-it-works",
            "references/t-sigs-how-it-works",
            "references/vetkeys-overview",
            "references/supported-signatures",
          ],
        },
        {
          type: "doc",
          label: "Glossary",
          id: "references/glossary",
        },
        {
          type: "category",
          label: "ICP dashboard",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "references/dashboard/overview",
            },
            "references/dashboard/using-the-dashboard",
            "references/dashboard/dashboard-apis",
          ],
        },
        {
          type: "doc",
          label: "Message execution properties",
          id: "references/message-execution-properties",
        },
        {
          type: "category",
          label: "Node providers",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "references/node-providers/overview",
            },
            "references/node-providers/node-metrics",
          ],
        },
        {
            type: "category",
            label: "Subnets",
            items: [
              {
                type: "doc",
                label: "Overview",
                id: "references/subnets/overview",
              },
              "references/subnets/subnet-types",
            ],
          },
      ],
    },
  ],
devjourney: [
    {
      type: "category",
      label: "Developer Journey",
      link: {
        type: "doc",
        id: "tutorials/developer-journey/index",
      },
      items: [
        {
          type: "category",
          label: "Level 0: Pre-flight operations",
          items: [
            "tutorials/developer-journey/level-0/ic-overview",
            "tutorials/developer-journey/level-0/ic-terms",
            "tutorials/developer-journey/level-0/dev-env",
            "tutorials/developer-journey/level-0/intro-canisters",
            "tutorials/developer-journey/level-0/intro-languages",
            "tutorials/developer-journey/level-0/intro-dfx",
      ],
    },
      {
        type: "category",
        label: "Level 1: Space cadet",
        items: [
          "tutorials/developer-journey/level-1/1.1-live-demo",
          "tutorials/developer-journey/level-1/1.2-motoko-lvl1",
          "tutorials/developer-journey/level-1/1.3-first-dapp",
          "tutorials/developer-journey/level-1/1.4-using-cycles",
          "tutorials/developer-journey/level-1/1.5-deploying-canisters",
          "tutorials/developer-journey/level-1/1.6-managing-canisters",
      ],
    },
    {
      type: "category",
      label: "Level 2: Space explorer",
      items: [
        "tutorials/developer-journey/level-2/2.1-storage-persistence",
        "tutorials/developer-journey/level-2/2.2-advanced-canister-calls",
        "tutorials/developer-journey/level-2/2.3-third-party-canisters",
        "tutorials/developer-journey/level-2/2.4-intro-candid",
        "tutorials/developer-journey/level-2/2.5-unit-testing",
        "tutorials/developer-journey/level-2/2.6-motoko-lvl2",
      ],
    },
    {
      type: "category",
      label: "Level 3: Space engineer",
      items: [
        "tutorials/developer-journey/level-3/3.1-package-managers",
        "tutorials/developer-journey/level-3/3.2-https-outcalls",
        "tutorials/developer-journey/level-3/3.3-certified-data",
        "tutorials/developer-journey/level-3/3.4-intro-to-agents",
        "tutorials/developer-journey/level-3/3.5-identities-and-auth",
        "tutorials/developer-journey/level-3/3.6-motoko-lvl3",
    ],
    },
    {
      type: "category",
      label: "Level 4: Space pilot",
      items: [
        "tutorials/developer-journey/level-4/4.1-icp-ledger",
        "tutorials/developer-journey/level-4/4.2-icrc-tokens",
        "tutorials/developer-journey/level-4/4.3-ckbtc-and-bitcoin",
        "tutorials/developer-journey/level-4/4.4-nns-governance",
        "tutorials/developer-journey/level-4/4.5-using-quill",
        "tutorials/developer-journey/level-4/4.6-motoko-lvl4",
    ],
    },
    {
      type: "category",
      label: "Level 5: Internet Computer astronaut",
      items: [
        "tutorials/developer-journey/level-5/5.1-vetKeys-tutorial",
        "tutorials/developer-journey/level-5/5.2-ICP-ETH-tutorial",
        "tutorials/developer-journey/level-5/5.3-token-swap-tutorial",
        "tutorials/developer-journey/level-5/5.4-NFT-tutorial",
        "tutorials/developer-journey/level-5/5.5-auction-tutorial",
        "tutorials/developer-journey/level-5/5.6-next-steps",
    ],
    },
  ],
  },
],

hackathon: [
  {
    type: "category",
    label: "Hackathon prep course",
    link: {
      type: "doc",
      id: "tutorials/hackathon-prep-course/index",
    },
    items: [
      "tutorials/hackathon-prep-course/what-is-icp",
      "tutorials/hackathon-prep-course/deploying-first-fullstack-dapp",
      "tutorials/hackathon-prep-course/exploring-the-backend",
      "tutorials/hackathon-prep-course/exploring-the-frontend",
      "tutorials/hackathon-prep-course/integrating-with-tokens",
      "tutorials/hackathon-prep-course/authentication",
      "tutorials/hackathon-prep-course/obtaining-cycles",
      "tutorials/hackathon-prep-course/managing-canisters",
      "tutorials/hackathon-prep-course/sample-starter-projects",
      "tutorials/hackathon-prep-course/resources",
    ],
  },
],
  rust: [
    {
      type: "category",
      label: "Getting started",
      items: [
        "developer-docs/backend/rust/index",
        "developer-docs/backend/rust/quickstart",
        "developer-docs/backend/rust/dev-env",
        "developer-docs/backend/rust/project-organization",
        "developer-docs/backend/rust/deploying",
      ]
    },
    {
      type: "category",
      label: "Writing Rust canisters",
      items: [
        "developer-docs/backend/rust/access-control",
        "developer-docs/backend/rust/searching-records",
        "developer-docs/backend/rust/counter",
        "developer-docs/backend/rust/rust-considerations",
        "developer-docs/backend/rust/timers",
        "developer-docs/backend/rust/stable-structures",
        "developer-docs/backend/rust/rust-limitations",
        "developer-docs/backend/rust/samples",
      ],
    },
    {
      type: "category",
      label: "Interacting with Rust canisters",
      items: [
        "developer-docs/backend/rust/intercanister",
        "developer-docs/backend/rust/message-inspect",
        "developer-docs/backend/rust/optimizing",
        "developer-docs/backend/rust/upgrading",
        {
          type: "category",
          label: "Candid for Rust canisters",
          items: [
          "developer-docs/backend/rust/candid",
          "developer-docs/backend/rust/generating-candid",
        ],
      },
      ],
    },
  ],
  motoko: [
    "motoko/tutorial",
    {
      type: "category",
      label: "Motoko language book",
      items: [
        {
          type: "link",
          label: "1. Introduction",
          href: "https://motoko-book.dev/introduction.html",
        },
        {
          type: "link",
          label: "2. Common programming concepts",
          href: "https://motoko-book.dev/common-programming-concepts.html",
        },
        {
          type: "link",
          label: "3. Internet Computer programming concepts",
          href: "https://motoko-book.dev/internet-computer-programming-concepts.html",
        },
        {
          type: "link",
          label: "4. Advanced types",
          href: "https://motoko-book.dev/advanced-types.html",
        },
        {
          type: "link",
          label: "5. The base library",
          href: "https://motoko-book.dev/base-library.html",
        },
        {
          type: "link",
          label: "6. Advanced concepts",
          href: "https://motoko-book.dev/advanced-concepts.html",
        },
      ],
    },
    {
      type: "autogenerated",
      dirName: "motoko/main",
    },
  ],
  solidity: [
    {
      type: "doc",
      label: "Solidity",
      id: "developer-docs/backend/solidity/index",
    },
  ],
  python: [
    {
      type: "doc",
      label: "Python",
      id: "developer-docs/backend/python/index",
    },
  ],
  typescript: [
    {
      type: "doc",
      label: "TypeScript",
      id: "developer-docs/backend/typescript/index",
    },
  ],
};

/**
 * Add UI tests in development mode
 */
if (process.env.NODE_ENV === "development") {
  sidebars["__ui_tests_internal__"] = [
    {
      type: "autogenerated",
      dirName: "tests",
    },
  ];
}

module.exports = sidebars;

const { metro, logger, commands } = vendetta;
const { vibrate: vibro } = metro.findByProps("vibrate");
const plat = (n) =>
	metro.findByProps("View").Platform.select({ ios: [n], android: n });
const { sendBotMessage } = metro.findByProps("sendBotMessage");
const plugin = {};
const patches = [];
plugin.onUnload = () => patches.every((p) => (p(), true));
plugin.onLoad = () => {
	patches[0] = commands.registerCommand({
		execute: exeCute,
		type: 1,
		inputType: 1,
		applicationId: 0,
		name: "vibrate",
		displayName: "vibrate",
		description: "b" + "r".repeat(50),
		displayDescription: "b" + "r".repeat(50),
		options: [
			{
				type: 4,
				required: true,
				name: "duration",
				displayName: "duration",
				description: "Duration of one vibration (in milliseconds)",
				displayDescription: "Duration of one vibration (in milliseconds)",
				min_value: 1,
				max_value: 9999,
			},
			{
				type: 4,
				name: "repeat",
				displayName: "repeat",
				description: "Number of times to repeat",
				displayDescription: "Number of times to repeat",
				min_value: 1,
				max_value: 9_999_999,
			},
			{
				type: 4,
				name: "gap",
				displayName: "gap",
				description:
					"Wait between vibrates (only matters if you have more than 1 repeat)",
				displayDescription:
					"Wait between vibrates (only matters if you have more than 1 repeat)",
			},
		],
	});
	/*patches[0] = commands.registerCommand({
		execute: exeCute,
		name: "vibrate",
		displayName: "vibrate",
		// the client may show this eventually
		description: "b" + "r".repeat(50),
		displayDescription: "b" + "r".repeat(50),
		options: [
			{
				type: 1,
				name: "preset",
				displayName: "preset",
				description: "Run a preset vibration",
				displayDescription: "Run a preset vibration",
				options: [
					{
						type: 3,
						name: "preset",
						displayName: "preset",
						description: "Select a preset to vibrate",
						displayDescription: "Select a preset to vibrate",
						choices: [
							{
								name: "400ms, 10 times, 50ms delay",
								displayName: "400ms, 10 times, 50ms delay",
								value: "400;10;50",
							},
							{
								name: "9999ms, 6969 times, 0ms delay",
								displayName: "9999ms, 6969 times, 0ms delay",
								value: "9999;6969;0",
							},
						],
					},
				],
			},
			{
				type: 1,
				name: "start",
				displayName: "start",
				description: "Start a vibration",
				displayDescription: "Start a vibration",
				options: [
					{
						type: 4,
						name: "duration",
						displayName: "duration",
						description: "Duration of one vibration",
						displayDescription: "Duration of one vibration",
						min_value: 1,
						max_value: 9999,
					},
					{
						type: 3,
						name: "raw_preset",
						displayName: "raw_preset",
						description: "Put your custom preset here (duration;repeat;gap)",
						displayDescription:
							"Put your custom preset here (duration;repeat;gap)",
					},
				],
			},
		],
		// applicationId: -1,
		inputType: 1,
		type: 1,
	}); */
};
async function exeCute(args, context) {
	const options = new Map(args.map((option) => [option.name, option]));
	sendBotMessage(
		context.channel.id,
		`Vibrating for ${options.get("duration").value}ms`
	);
	console.log(
		options.get("duration").value,
		options.get("repeat").value,
		options.get("gap").value,
		() => {
			sendBotMessage(context.channel.id, "Finished vibrating");
		}
	);
}
async function vibrate(duration, repeat = 1, gap = 0, cb) {
	let id = +Date.now();
	const wait = (ms) => new Promise((res) => setTimeout(res, ms));

	for (let i = 0; i < repeat; i++) {
		vibro(plat(duration), true);
		await wait(duration);
		await wait(gap);
	}
	cb();
}
export default plugin;

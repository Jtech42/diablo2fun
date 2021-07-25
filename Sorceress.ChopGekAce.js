function LoadConfig() {
	/* Sequence config
	 * Set to true if you want to run it, set to false if not.
	 * If you want to change the order of the scripts, just change the order of their lines by using cut and paste.
	 */

	// User addon script. Read the description in libs/bots/UserAddon.js
	Scripts.UserAddon = false; // !!!YOU MUST SET THIS TO FALSE IF YOU WANT TO RUN BOSS/AREA SCRIPTS!!!

	Scripts.ChestMania = true; // Open chests in configured areas. See sdk/areas.txt
		Config.ChestMania.Act1 = [13, 14, 15, 16, 18, 19]; // List of act 1 areas to open chests in
		Config.ChestMania.Act2 = [55, 59, 65, 66, 67, 68, 69, 70, 71, 72]; // List of act 2 areas to open chests in
		Config.ChestMania.Act3 = [79, 80, 81, 92, 93, 84, 85, 90]; // List of act 3 areas to open chests in
		Config.ChestMania.Act4 = [107]; // List of act 4 areas to open chests in
		Config.ChestMania.Act5 = [115, 116, 119, 125, 126, 127]; // List of act 5 areas to open chests in
	Scripts.ClearAnyArea = false; // Clear any area. Uses Config.ClearType to determine which type of monsters to kill.
		Config.ClearAnyArea.AreaList = []; // List of area ids to clear. See sdk/areas.txt

	// Boss/area scripts

	// *** act 1 ***
	Scripts.Corpsefire = true;
		Config.Corpsefire.ClearDen = true;
	Scripts.Mausoleum = false;
		Config.Mausoleum.KillBloodRaven = false;
		Config.Mausoleum.ClearCrypt = false;
	Scripts.Rakanishu = true;
		Config.Rakanishu.KillGriswold = true;
	Scripts.UndergroundPassage = true;
	Scripts.Coldcrow = true;
	Scripts.Tristram = true;
		Config.Tristram.WalkClear = true; // Disable teleport while clearing to protect leechers
		Config.Tristram.PortalLeech = false; // Set to true to open a portal for leechers.
	Scripts.Pit = true;
		Config.Pit.ClearPit1 = true;
	Scripts.Treehead = true;
	Scripts.Smith = true;
	Scripts.BoneAsh = true;
	Scripts.Countess = true;
		Config.Countess.KillGhosts = true;
	Scripts.Andariel = true;
	Scripts.Cows = true;

	// *** act 2 ***
	Scripts.Radament = false;
	Scripts.Coldworm = true;
		Config.Coldworm.KillBeetleburst = false;
		Config.Coldworm.ClearMaggotLair = false; // Clear all 3 levels
	Scripts.AncientTunnels = false;
		Config.AncientTunnels.OpenChest = false; // Open special chest in Lost City
		Config.AncientTunnels.KillDarkElder = false;
	Scripts.Summoner = true;
		Config.Summoner.FireEye = false;
	Scripts.Tombs = true;
	Scripts.Duriel = true;

	// *** act 3 ***
	Scripts.Stormtree = false;
	Scripts.KurastTemples = false;
	Scripts.Icehawk = false;
	Scripts.Endugu = false;
	Scripts.Travincal = true;
		Config.Travincal.PortalLeech = false; // Set to true to open a portal for leechers.
	Scripts.Mephisto = true;
		Config.Mephisto.MoatTrick = false;
		Config.Mephisto.KillCouncil = true;
		Config.Mephisto.TakeRedPortal = true;

	// *** act 4 ***
	Scripts.OuterSteppes = true;
	Scripts.Izual = false;
	Scripts.Hephasto = true;
	Scripts.Vizier = false; // Intended for classic sorc, kills Vizier only.
	Scripts.FastDiablo = false;
	Scripts.Diablo = true;
		Config.Diablo.WalkClear = false; // Disable teleport while clearing to protect leechers
		Config.Diablo.Entrance = true; // Start from entrance
		Config.Diablo.SealWarning = "Leave the seals alone!";
		Config.Diablo.EntranceTP = "Entrance TP up";
		Config.Diablo.StarTP = "Star TP up";
		Config.Diablo.DiabloMsg = "Diablo";
		Config.Diablo.SealOrder = ["vizier", "seis", "infector"]; // the order in which to clear the seals. If seals are excluded, they won't be checked unless diablo fails to appear
	Scripts.SealLeader = false; // Clear a safe spot around seals and invite leechers in. Leechers should run SealLeecher script. Don't run with Diablo or FastDiablo.

	// *** act 5 ***
	Scripts.Pindleskin = true;
		Config.Pindleskin.UseWaypoint = true;
		Config.Pindleskin.KillNihlathak = true;
		Config.Pindleskin.ViperQuit = false; // End script if Tomb Vipers are found.
	Scripts.Nihlathak = true;
		Config.Nihlathak.ViperQuit = false; // End script if Tomb Vipers are found.
	Scripts.Eldritch = true;
		Config.Eldritch.OpenChest = true;
		Config.Eldritch.KillShenk = true;
		Config.Eldritch.KillDacFarren = true;
	Scripts.Eyeback = false;
	Scripts.SharpTooth = false;
	Scripts.ThreshSocket = true;
	Scripts.Abaddon = false;
	Scripts.Frozenstein = false;
		Config.Frozenstein.ClearFrozenRiver = true;
	Scripts.Bonesaw = false;
		Config.Bonesaw.ClearDrifterCavern = false;
	Scripts.Snapchip = false;
		Config.Snapchip.ClearIcyCellar = true;
	Scripts.Worldstone = false;
	Scripts.Baal = true;
		Config.Baal.HotTPMessage = "Hot TP!";
		Config.Baal.SafeTPMessage = "Safe TP!";
		Config.Baal.BaalMessage = "Baal!";
		Config.Baal.SoulQuit = false; // End script if Souls (Burning Souls) are found.
		Config.Baal.DollQuit = false; // End script if Dolls (Undead Soul Killers) are found.
		Config.Baal.KillBaal = true; // Kill Baal. Leaves game after wave 5 if false.

	// *** special scripts ***
	Scripts.WPGetter = true; // Get missing waypoints
	Scripts.GetKeys = false; // Hunt for T/H/D keys
	Scripts.OrgTorch = false;
		Config.OrgTorch.MakeTorch = true; // Convert organ sets to torches
		Config.OrgTorch.WaitForKeys = true; // Enable Torch System to get keys from other profiles. See libs/TorchSystem.js for more info
		Config.OrgTorch.WaitTimeout = 15; // Time in minutes to wait for keys before moving on
		Config.OrgTorch.UseSalvation = true; // Use Salvation aura on Mephisto (if possible)
		Config.OrgTorch.GetFade = false; // Get fade by standing in a fire. You MUST have Last Wish or Treachery on your character being worn.
		Config.OrgTorch.AntidotesToChug = 0; // Chug x antidotes before Lilith. Each antidote gives +50 poison res and +10 max poison for 30 seconds. The duration stacks. 4 potions == 2 minutes
	Scripts.Rusher = false; // Rush bot. For a list of commands, see Rusher.js
		Config.Rusher.WaitPlayerCount = 0; // Wait until game has a certain number of players (0 - don't wait, 8 - wait for full game).
		Config.Rusher.Radament = false; // Do Radament quest.
		Config.Rusher.LamEsen = false; // Do Lam Esen quest.
		Config.Rusher.Izual = false; // Do Izual quest.
		Config.Rusher.Shenk = false; // Do Shenk quest.
		Config.Rusher.Anya = false; // Do Anya quest.
		Config.Rusher.LastRun = ""; // End rush after this run.
	Scripts.Rushee = false; // Automatic rushee, works with Rusher. Set Rusher's character name as Config.Leader
		Config.Rushee.Quester = false; // Enter portals and get quest items.
		Config.Rushee.Bumper = false; // Do Ancients and Baal. Minimum levels: 20 - norm, 40 - nightmare
	Scripts.CrushTele = false; // classic rush teleporter. go to area of interest and press "-" numpad key
	Scripts.Questing = false; // solves missing quests (skill/stat+shenk)
	Scripts.Gamble = false; // Gambling system, other characters will mule gold into your game so you can gamble infinitely. See Gambling.js
	Scripts.Crafting = false; // Crafting system, other characters will mule crafting ingredients. See CraftingSystem.js
	Scripts.GhostBusters = true; // Kill ghosts in most areas that contain them
	Scripts.Enchant = false;
		Config.Enchant.Triggers = ["chant", "cows", "wps"]; // Chat commands for enchant, cow level and waypoint giving
		Config.Enchant.GetLeg = false; // Get Wirt's Leg from Tristram. If set to false, it will check for the leg in town.
		Config.Enchant.AutoChant = false; // Automatically enchant nearby players and their minions
		Config.Enchant.GameLength = 20; // Game length in minutes
	Scripts.IPHunter = false;
		Config.IPHunter.IPList = []; // List of IPs to look for. example: [165, 201, 64]
		Config.IPHunter.GameLength = 3; // Number of minutes to stay in game if ip wasn't found
	Scripts.KillDclone = false; // Kill Diablo Clone by using Arcane Sanctuary waypoint. Diablo needs to walk the Earth in the game.
	Scripts.ShopBot = false; // Shopbot script. Automatically uses shopbot.nip and ignores other pickits.
		// Supported NPCs: Akara, Charsi, Gheed, Elzix, Fara, Drognan, Ormus, Asheara, Hratli, Jamella, Halbu, Anya. Multiple NPCs are also supported, example: [NPC.Elzix, NPC.Fara]
		// Use common sense when combining NPCs. Shopping in different acts will probably lead to bugs.
		Config.ShopBot.ShopNPC = NPC.Anya;
		// Put item classid numbers or names to scan (remember to put quotes around names). Leave blank to scan ALL items. See libs/config/templates/ShopBot.txt
		Config.ShopBot.ScanIDs = [];
		Config.ShopBot.CycleDelay = 0; // Delay between shopping cycles in milliseconds, might help with crashes.
		Config.ShopBot.QuitOnMatch = false; // Leave game as soon as an item is shopped.


	// *** Guest scripts ***

	// Baal Assistant by YourGreatestMember
	Scripts.BaalAssistant = false; // Used to leech or help in baal runs.
		Config.BaalAssistant.Wait = 120; // Seconds to wait for a runner to be in the throne / portal wait / safe TP wait / hot TP wait...
		Config.BaalAssistant.KillNihlathak = false; // Kill Nihlathak before going to Throne
		Config.BaalAssistant.FastChaos = false; // Kill Diablo before going to Throne
		Config.BaalAssistant.Helper = true; // Set to true to help attack, set false to to leech.
		Config.BaalAssistant.GetShrine = false; // Set to true to get a experience shrine at the start of the run.
		Config.BaalAssistant.GetShrineWaitForHotTP = false; // Set to true to get a experience shrine after leader shouts the hot tp message as defined in Config.BaalAssistant.HotTPMessage
		Config.BaalAssistant.SkipTP = false; // Set to true to enable the helper to skip the TP and teleport down to the throne room.
		Config.BaalAssistant.WaitForSafeTP = false; // Set to true to wait for a safe TP message (defined in SafeTPMessage)
		Config.BaalAssistant.DollQuit = false; // Quit on dolls. (Hardcore players?)
		Config.BaalAssistant.SoulQuit = false; // Quit on Souls. (Hardcore players?)
		Config.BaalAssistant.KillBaal = true; // Set to true to kill baal, if you set to false you MUST configure Config.QuitList or Config.BaalAssistant.NextGameMessage or the bot will wait indefinitely.
		Config.BaalAssistant.HotTPMessage = ["Hot"]; // Configure safe TP messages.
		Config.BaalAssistant.SafeTPMessage = ["Safe", "Clear"]; // Configure safe TP messages.
		Config.BaalAssistant.BaalMessage = ["Baal"]; // Configure baal messages, this is a precautionary measure.
		Config.BaalAssistant.NextGameMessage = ["Next Game", "Next", "New Game"];	// Next Game message, this is a precautionary quit command, Reccomended setting up: Config.QuitList

	// Town settings
	Config.HealHP = 50; // Go to a healer if under designated percent of life.
	Config.HealMP = 5; // Go to a healer if under designated percent of mana.
	Config.HealStatus = true; // Go to a healer if poisoned or cursed
	Config.UseMerc = true; // Use merc. This is ignored and always false in d2classic.
	Config.MercWatch = true; // Instant merc revive during battle.

	// Potion settings
	Config.UseHP = 85; // Drink a healing potion if life is under designated percent.
	Config.UseRejuvHP = 55;  // Drink a rejuvenation potion if life is under designated percent.
	Config.UseMP = 40; // Drink a mana potion if mana is under designated percent.
	Config.UseRejuvMP = 0; // Drink a rejuvenation potion if mana is under designated percent.
	Config.UseMercHP = 75; // Give a healing potion to your merc if his/her life is under designated percent.
	Config.UseMercRejuv = 0; // Give a rejuvenation potion to your merc if his/her life is under designated percent.
	Config.HPBuffer = 0; // Number of healing potions to keep in inventory.
	Config.MPBuffer = 0; // Number of mana potions to keep in inventory.
	Config.RejuvBuffer = 0; // Number of rejuvenation potions to keep in inventory.

	// Chicken settings
	Config.LifeChicken = 30; // Exit game if life is less or equal to designated percent.
	Config.ManaChicken = 0; // Exit game if mana is less or equal to designated percent.
	Config.MercChicken = 0; // Exit game if merc's life is less or equal to designated percent.
	Config.TownHP = 50; // Go to town if life is under designated percent.
	Config.TownMP = 0; // Go to town if mana is under designated percent.

	/* Inventory lock configuration. !!!READ CAREFULLY!!!
	 * 0 = item is locked and won't be moved. If item occupies more than one slot, ALL of those slots must be set to 0 to lock it in place.
	 * Put 0s where your torch, annihilus and everything else you want to KEEP is.
	 * 1 = item is unlocked and will be dropped, stashed or sold.
	 * If you don't change the default values, the bot won't stash items.
	 */
	Config.Inventory[0] = [1,1,1,1,1,0,0,0,0,0];
	Config.Inventory[1] = [1,1,1,1,1,0,0,0,0,0];
	Config.Inventory[2] = [1,1,1,1,1,0,0,0,0,0];
	Config.Inventory[3] = [1,1,1,1,1,0,0,0,0,0];

	Config.StashGold = 100000; // Minimum amount of gold to stash.

	/* Potion types for belt columns from left to right.
	 * Rejuvenation potions must always be rightmost.
	 * Supported potions - Healing ("hp"), Mana ("mp") and Rejuvenation ("rv")
	 */
	Config.BeltColumn[0] = "hp";
	Config.BeltColumn[1] = "mp";
	Config.BeltColumn[2] = "mp";
	Config.BeltColumn[3] = "rv";

	/* Minimum amount of potions. If we have less, go to vendor to purchase more.
	 * Set rejuvenation columns to 0, because they can't be bought.
	 */
	Config.MinColumn[0] = 1;
	Config.MinColumn[1] = 3;
	Config.MinColumn[2] = 0;
	Config.MinColumn[3] = 0;

	// Pickit config. Default folder is kolbot/pickit.
	Config.PickitFiles.push("kolton.nip");
	Config.PickitFiles.push("LLD.nip");
	Config.PickitFiles.push("ladder.nip");
	Config.PickRange = 40; // Pick radius
	Config.FastPick = false; // Check and pick items between attacks
	Config.ManualPlayPick = false; // If set to true and D2BotMap entry script is used, will enable picking in manual play.

	/* Advanced automule settings
	 * Trigger - Having an item that is on the list will initiate muling. Useful if you want to mule something immediately upon finding.
	 * Force - Items listed here will be muled even if they are ingredients for cubing.
	 * Exclude - Items listed here will be ignored and will not be muled. Items on Trigger or Force lists are prioritized over this list.
	 *
	 * List can either be set as string in pickit format and/or as number referring to item classids. Each entries are separated by commas.
	 * Example :
	 *  Config.AutoMule.Trigger = [639, 640, "[type] == ring && [quality] == unique # [maxmana] == 20"];
	 *  	This will initiate muling when your character finds Ber, Jah, or SOJ.
	 *  Config.AutoMule.Force = [561, 566, 571, 576, 581, 586, 601];
	 *  	This will mule perfect gems/skull during muling.
	 *  Config.AutoMule.Exclude = ["[name] >= talrune && [name] <= solrune", "[name] >= 654 && [name] <= 657"];
	 *  	This will exclude muling of runes from tal through sol, and any essences.
	 */
	Config.AutoMule.Trigger = [];
	Config.AutoMule.Force = [];
	Config.AutoMule.Exclude = [];

	// Additional item info log settings. All info goes to \logs\ItemLog.txt
	Config.ItemInfo = false; // Log stashed, skipped (due to no space) or sold items.
	Config.ItemInfoQuality = []; // The quality of sold items to log. See NTItemAlias.dbl for values. Example: Config.ItemInfoQuality = [6, 7, 8];

	// Item identification settings
	Config.CainID.Enable = false; // Identify items at Cain
	Config.CainID.MinGold = 100000; // Minimum gold (stash + character) to have in order to use Cain.
	Config.CainID.MinUnids = 3; // Minimum number of unid items in order to use Cain.

	// Manager Item Log Screen
	Config.LogKeys = false; // Log keys on item viewer
	Config.LogOrgans = true; // Log organs on item viewer
	Config.LogLowRunes = false; // Log low runes (El - Dol) on item viewer
	Config.LogMiddleRunes = false; // Log middle runes (Hel - Mal) on item viewer
	Config.LogHighRunes = true; // Log high runes (Ist - Zod) on item viewer
	Config.LogLowGems = false; // Log low gems (chipped, flawed, normal) on item viewer
	Config.LogHighGems = false; // Log high gems (flawless, perfect) on item viewer
	Config.SkipLogging = []; // Custom log skip list. Set as three digit item code or classid. Example: ["tes", "ceh", 656, 657] will ignore logging of essences.
	Config.ShowCubingInfo = true; // Show cubing messages on console
	Config.Gamble = true;
	Config.GambleGoldStart = 2000000;
	Config.GambleGoldStop = 1000000;
	Config.GambleItems.push("Circlet");
	Config.GambleItems.push("Coronet");
	Config.Cubing = true; // Set to true to enable cubing.
	Config.Recipes.push([Recipe.Token]); // Make Token of Absolution
	Config.Recipes.push([Recipe.Rune, "Pul Rune"]); // Upgrade Pul to Um
	Config.Recipes.push([Recipe.Rune, "Um Rune"]); // Upgrade Um to Mal
	Config.Recipes.push([Recipe.Rune, "Mal Rune"]); // Upgrade Mal to Ist
	Config.Recipes.push([Recipe.Rune, "Ist Rune"]); // Upgrade Ist to Gul
	Config.Recipes.push([Recipe.Rune, "Gul Rune"]); // Upgrade Gul to Vex
	//Caster Amethyst
	Config.Recipes.push([Recipe.Caster.Amulet]); // Craft Caster Amulet
	Config.Recipes.push([Recipe.Caster.Boots, "Wyrmhide Boots"]); // Craft Caster Boots

	//Blood Ruby
	Config.Recipes.push([Recipe.Blood.Ring]); // Craft Blood Ring
	Config.Recipes.push([Recipe.Blood.Helm, "Armet"]); // Craft Blood Armet
	Config.Recipes.push([Recipe.Blood.Weapon, "Berserker Axe"]); // Craft Blood Weapon
	
	//Hit Power Sapphire
	Config.Recipes.push([Recipe.HitPower.Gloves, "Vambraces"]); // Craft Hit Power Vambraces

	//Safety Emerald
	Config.Recipes.push([Recipe.HitPower.Shield, "Ancient Shield"]); // Craft Hit Power Shield

	//Reroll
	Config.Recipes.push([Recipe.Reroll.Magic, "Grand Charm"]); // Reroll magic Grand Charm (ilvl 91+)
	Config.Recipes.push([Recipe.Socket.Armor, "Sacred Armor", Roll.Eth]); // Socket ethereal Sacred Armor
	Config.Recipes.push([Recipe.Socket.Armor, "Archon Plate", Roll.Eth]); // Socket ethereal Archon Plate
	Config.Recipes.push([Recipe.Unique.Armor.ToExceptional, "Heavy Gloves", Roll.NonEth]); // Upgrade Bloodfist to Exceptional
	Config.Recipes.push([Recipe.Unique.Armor.ToExceptional, "Light Gauntlets", Roll.NonEth]); // Upgrade Magefist to Exceptional
	Config.Recipes.push([Recipe.Unique.Armor.ToElite, "Sharkskin Gloves", Roll.NonEth]); // Upgrade Bloodfist or Grave Palm to Elite
	Config.Recipes.push([Recipe.Unique.Armor.ToElite, "Battle Gauntlets", Roll.NonEth]); // Upgrade Magefist or Lavagout to Elite
	Config.Recipes.push([Recipe.Unique.Armor.ToElite, "War Boots", Roll.NonEth]); // Upgrade Gore Rider to Elite
	Config.MakeRunewords = true; // Set to true to enable runeword making/rerolling
	//Config.Runewords.push([Runeword.Insight, "Thresher", Roll.Eth]); // Make ethereal Insight Thresher
	//Config.Runewords.push([Runeword.Insight, "Cryptic Axe", Roll.Eth]); // Make ethereal Insight Cryptic Axe
	//Config.KeepRunewords.push("[type] == polearm # [meditationaura] == 17");
	Config.Runewords.push([Runeword.Spirit, "Monarch", Roll.NonEth]); // Make Spirit Monarch
	Config.Runewords.push([Runeword.Spirit, "Sacred Targe", Roll.NonEth]); // Make Spirit Sacred Targe
	Config.KeepRunewords.push("[type] == shield || [type] == auricshields # [fcr] == 35");

	// General config
	Config.AutoMap = false; // Set to true to open automap at the beginning of the game.
	Config.LastMessage = ""; // Message or array of messages to say at the end of the run. Use $nextgame to say next game - "Next game: $nextgame" (works with lead entry point)
	Config.MinGameTime = 260; // Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
	Config.MaxGameTime = 150000; // Maximum game time in seconds. Quit game when limit is reached.
	Config.OpenChests = true; // Open chests. Controls key buying.
	Config.MiniShopBot = true; // Scan items in NPC shops.
	Config.PacketShopping = true; // Use packets to shop. Improves shopping speed.
	Config.TownCheck = true; // Go to town if out of potions
	Config.LogExperience = true; // Print experience statistics in the manager.
	Config.ScanShrines = [15, 12, 6, 3, 2];
	Config.MFSwitchPercent = 0; // Boss life % to switch to non-primiary weapon slot. Set to 0 to disable.
	Config.PrimarySlot = -1; // Set to use specific weapon slot as primary weapon slot: -1 = disabled, 0 = slot I, 1 = slot II
	Config.FCR = 255; // 0 - disable, 1 to 255 - set value of faster cast rate
	Config.FHR = 255; // 0 - disable, 1 to 255 - set value of faster hit recovery
	Config.FBR = 255; // 0 - disable, 1 to 255 - set value of faster block recovery
	Config.IAS = 255; // 0 - disable, 1 to 255 - set value of increased attack speed
	Config.PacketCasting = 0; // 0 = disable, 1 = packet teleport, 2 = full packet casting.
	Config.WaypointMenu = true;
	Config.AntiHostile = true; // Enable anti-hostile
	Config.HostileAction = 2; // 0 - quit immediately, 1 - quit when hostile player is sighted, 2 - attack hostile
	Config.TownOnHostile = false; // Go to town instead of quitting when HostileAction is 0 or 1
	Config.RandomPrecast = false; // Anti-PK measure, only supported in Baal and BaalHelper and BaalAssisstant at the moment.
	Config.ViperCheck = false; // Quit if revived Tomb Vipers are sighted
	Config.StopOnDClone = true; // Go to town and idle as soon as Diablo walks the Earth
	Config.SoJWaitTime = 15; // Time in minutes to wait for another SoJ sale before leaving game. 0 = disabled
	Config.KillDclone = false; // Go to Palace Cellar 3 and try to kill Diablo Clone. Pointless if you already have Annihilus.
	Config.DCloneQuit = false; // 1 = quit when Diablo walks, 2 = quit on soj sales, 0 = disabled

	// Monster skip config
	// Skip immune monsters. Possible options: "fire", "cold", "lightning", "poison", "physical", "magic".
	// You can combine multiple resists with "and", for example - "fire and cold", "physical and cold and poison"
	Config.SkipImmune = ["physical and magic"];
	// Skip enchanted monsters. Possible options: "extra strong", "extra fast", "cursed", "magic resistant", "fire enchanted", "lightning enchanted", "cold enchanted", "mana burn", "teleportation", "spectral hit", "stone skin", "multiple shots".
	// You can combine multiple enchantments with "and", for example - "cursed and extra fast", "mana burn and extra strong and lightning enchanted"
	Config.SkipEnchant = [];
	// Skip monsters with auras. Possible options: "fanaticism", "might", "holy fire", "blessed aim", "holy freeze", "holy shock". Conviction is bugged, don't use it.
	Config.SkipAura = [];
	// Uncomment the following line to always attempt to kill these bosses despite immunities and mods
	//Config.SkipException = [getLocaleString(2851), getLocaleString(2852), getLocaleString(2853)]; // vizier, de seis, infector

	/* Attack config
	 * To disable an attack, set it to -1
	 * Skills MUST be POSITIVE numbers. For reference see ...\kolbot\sdk\skills.txt
	 */
	Config.AttackSkill[0] = -1; // Preattack skill. Not implemented yet.
	Config.AttackSkill[1] = 49; // Primary skill to bosses.
	Config.AttackSkill[2] = -1; // Primary untimed skill to bosses. Keep at -1 if Config.AttackSkill[1] is untimed skill.
	Config.AttackSkill[3] = 53; // Primary skill to others.
	Config.AttackSkill[4] = -1; // Primary untimed skill to bosses. Keep at -1 if Config.AttackSkill[3] is untimed skill.
	Config.AttackSkill[5] = -1; // Secondary skill if monster is immune to primary.
	Config.AttackSkill[6] = -1; // Secondary untimed skill if monster is immune to primary untimed.

	// Low mana skills - these will be used if main skills can't be cast.
	Config.LowManaSkill[0] = -1; // Timed low mana skill.
	Config.LowManaSkill[1] = -1; // Untimed low mana skill.

	/* Advanced Attack config. Allows custom skills to be used on custom monsters.
	 *	Format: "Monster Name": [timed skill id, untimed skill id]
	 *	Example: "Baal": [38, -1] to use charged bolt on Baal
	 *	Multiple entries are separated by commas
	 */
	Config.CustomAttack = {
		//"Monster Name": [-1, -1]
	};

	Config.NoTele = false; // Restrict char from teleporting. Useful for low level/low mana chars
	Config.Dodge = true; // Move away from monsters that get too close. Don't use with short-ranged attacks like Poison Dagger.
	Config.DodgeRange = 15; // Distance to keep from monsters.
	Config.DodgeHP = 80; // Dodge only if HP percent is less than or equal to Config.DodgeHP. 100 = always dodge.
	Config.BossPriority = false; // Set to true to attack Unique/SuperUnique monsters first when clearing
	Config.ClearType = 0xF; // Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	Config.TeleStomp = false; // Use merc to attack bosses if they're immune to attacks, but not to physical damage

	// Clear while traveling during bot scripts
	// You have two methods to configure clearing. First is simply a spectype to always clear, in any area, with a default range of 30
	// The second method allows you to specify the areas in which to clear while traveling, a range, and a spectype. If area is excluded from this method,
	// all areas will be cleared using the specified range and spectype
	// Config.ClearPath = 0; // Monster spectype to kill while traveling. 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	// Config.ClearPath = {
	// 	Areas: [74], // Specific areas to clear while traveling in. Comment out to clear in all areas
	// 	Range: 30, // Range to clear while traveling
	// 	Spectype: 0, // Monster spectype to kill while traveling. 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	// };

	// Wereform setup. Make sure you read Templates/Attacks.txt for attack skill format.
	Config.Wereform = false; // 0 / false - don't shapeshift, 1 / "Werewolf" - change to werewolf, 2 / "Werebear" - change to werebear

	// Class specific config
	Config.CastStatic = 57; // Cast static until the target is at designated life percent. 100 = disabled.
	Config.StaticList = []; // List of monster NAMES or CLASSIDS to static. Example: Config.StaticList = ["Andariel", 243];

	/* AutoSkill builds character based on array defined by the user and it replaces AutoBuild's skill system.
	 * AutoSkill will automatically spend skill points and it can also allocate any prerequisite skills as required.
	 *
	 * Format: Config.AutoSkill.Build = [[skillID, count, satisfy], [skillID, count, satisfy], ... [skillID, count, satisfy]];
	 *	skill - skill id number (see /sdk/skills.txt)
	 *	count - maximum number of skill points to allocate for that skill
	 *	satisfy - boolean value to stop(true) or continue(false) further allocation until count is met. Defaults to true if not specified.
	 *
	 *	See libs/config/Templates/AutoSkillExampleBuilds.txt for Config.AutoSkill.Build examples.
	 */
	Config.AutoSkill.Enabled = false; // Enable or disable AutoSkill system
	Config.AutoSkill.Save = 0; // Number of skill points that will not be spent and saved
	Config.AutoSkill.Build = [];

	/* AutoStat builds character based on array defined by the user and this will replace AutoBuild's stat system.
	 * AutoStat will stat Build array order. You may want to stat strength or dexterity first to meet item requirements.
	 *
	 * Format: Config.AutoStat.Build = [[statType, stat], [statType, stat], ... [statType, stat]];
	 *	statType - defined as string, or as corresponding stat integer. "strength" or 0, "dexterity" or 2, "vitality" or 3, "energy" or 1
	 *	stat - set to an integer value, and it will spend stat points until it reaches desired *hard stat value (*+stats from items are ignored).
	 *	You can also set stat to string value "all", and it will spend all the remaining points.
	 *	Dexterity can be set to "block" and it will stat dexterity up the the desired block value specified in arguemnt (ignored in classic).
	 *
	 *	See libs/config/Templates/AutoStatExampleBuilds.txt for Config.AutoStat.Build examples.
	 */
	Config.AutoStat.Enabled = false; // Enable or disable AutoStat system
	Config.AutoStat.Save = 0; // Number stat points that will not be spent and saved.
	Config.AutoStat.BlockChance = 0; // An integer value set to desired block chance. This is ignored in classic.
	Config.AutoStat.UseBulk = true; // Set true to spend multiple stat points at once (up to 100), or false to spend singe point at a time.
	Config.AutoStat.Build = [];

	// AutoBuild System ( See /d2bs/kolbot/libs/config/Builds/README.txt for instructions )
	Config.AutoBuild.Enabled = false;			//	This will enable or disable the AutoBuild system

	Config.AutoBuild.Template = "BuildName";	//	The name of the build associated with an existing
												//	template filename located in libs/config/Builds/

	Config.AutoBuild.Verbose = true;			//	Allows script to print messages in console
	Config.AutoBuild.DebugMode = true;			//	Debug mode prints a little more information to console and
												//	logs activity to /logs/AutoBuild.CharacterName._MM_DD_YYYY.log
												//	It automatically enables Config.AutoBuild.Verbose
}
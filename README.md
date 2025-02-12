# Kanata APL Layouts
<div align="center"><img
    alt="Image of a keycap with the APL logo on it in green tones"
    title="Kanata APL Layouts"
    align="center"
    height="220"
    src="assets/kanata-apl-icon.svg"
  />
  <p>International keyboard layouts for APL.</p>
</div>

[![GitHub Licence](https://img.shields.io/github/license/sloorush/ullu)](LICENSE)

<h3 align="center">
  
</h3>

- [About Kanata](#about-kanata)
- [Usage](#usage)
    - [Autostart on Microsoft Windows](#autostart-on-microsoft-windows)
- [Available layouts](#available-layouts)

## About Kanata
[Kanata](https://github.com/jtroo/kanata) is a cross-platform software for enabling multiple keyboard layers.

## Usage
This repository provides Kanata configurations as **.kbd** files. Specific instructions for running Kanata on different platforms are found in the Kanata repository.

### Autostart on Microsoft Windows
Follow these steps to have the Kanata APL keyboard start automatically when you log in.

1. Download one of the **.kbd** files from this repository
1. Download **kanata_gui.exe** from the [Kanata releases page](https://github.com/jtroo/kanata/releases)
1. Place the two downloaded files in the same permanent location.
1. Rename the keyboard layout file to **kanata.kbd**
1. Right click on **kanata_gui.exe**
    1. Click **Show more options**
    1. Click **Create shortcut**
1. Press <kbd>Win</kbd>+<kbd>R</kbd>, type `shell:startup` and press <kbd>Enter</kbd>
1. Copy the **shortcut** to this startup folder

When you log in, the Kanata icon should appear in your system tray.

## Available layouts
| Layout (link to diagram) | Kanata configuration file |
| ------------------------ | ------------------------- |
| [English (United Kingdom)](./layouts.md#en-gb) |  [en-GB_APL.kbd](en-GB_APL.kbd) |

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

- [About](#about)
- [Usage](#usage)
    - [Autostart on Microsoft Windows](#autostart-on-microsoft-windows)
    - [Autostart on Linux](#autostart-on-linux)
- [Available layouts](#available-layouts)
    - [Shifting key layouts](#shifting-key-layouts)
    - [Prefix key layouts](#prefix-key-layouts)

## About
[Kanata](https://github.com/jtroo/kanata) is cross-platform software to modify the behaviour of keyboard input. This repository contains Kanata configuration files to enable [typing APL symbols](https://aplwiki.com/wiki/Typing_glyphs).

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

### Autostart on Linux
Most users can follow these instructions to have Kanata start at login.

1. Download the **kanata** executable from the [Kanata releases page](https://github.com/jtroo/kanata/releases)
1. Make sure it is executable and move it to `/usr/local/bin/kanata`
    ```bash
    chmod +x kanata
    sudo mv kanata /usr/local/bin/kanata
    ```
1. Download one of the **.kbd** files from this repository
1. Modify the following configuration and save it to `/lib/systemd/system/kanata.service`
    ```
    [Unit]
    Description=Kanata keyboard remapper
    Documentation=https://github.com/jtroo/kanata

    [Service]
    Type=simple
    ExecStart=/usr/local/bin/kanata --cfg /home/user/.config/kanata/config-name.kbd
    Restart=no

    [Install]
    WantedBy=default.target
    ```
1. Enable the service
    - Run it now with `sudo systemctl start kanata`
    - Run at login with `sudo systemctl enable kanata`

System administrators and other users with particular security concerns should refer to [Yvan-Masson's suggested configuration](https://github.com/jtroo/kanata/discussions/130#discussioncomment-11377658) in the Kanata discussions.

## Available layouts

### Shifting key layouts
When Kanata uses these configurations there are one or more keys defined that, while held, enable the output of APL symbols.

They are set to <kbd>Caps Lock</kbd> and <kbd>Right Ctrl</kbd>, but can be changed by editing the section beginning `deflayermap (base)`. Double-tap the prefix key to perform its original action. The double-tap timeout is 200ms by default, but can be changed in the section `defalias apl-mode`.

The names and symbols for keys are found in the function `str_to_oscode` in [the source](https://github.com/jtroo/kanata/blob/main/parser/src/keys/mod.rs) and are defined according to the US English layout. Often these are the same keys as in other layouts, but the documentation includes more information about [configuration for non-US keyboards](https://github.com/jtroo/kanata/blob/main/docs/config.adoc#non-us-keyboards).

| Layout (link to diagram) | Kanata configuration file |
| ------------------------ | ------------------------- |
| [English (United Kingdom)](./layouts.md#en-gb) |  [en-GB_APL.kbd](en-GB_APL.kbd) |

### Prefix key layouts
A prefix key is a special key or character which is entered immediately before typing the corresponding key. The following layouts use both <kbd>Backquote</kbd> (also known as <kbd>backtick</kbd> or <kbd>grave</kbd>, <kbd>`</kbd>) ⍺nd <kbd>Backslash</kbd> (<kbd>\\</kbd>) as prefix keys. 

Prefix keys can be configured by editing the section beginning `deflayermap (base)`.

Double-tap the prefix key to perform its original action. The double-tap timeout is 200ms by default, but can be changed in the section `defalias apl-mode`.

| Layout (link to diagram) | Kanata configuration file |
| ------------------------ | ------------------------- |
| [English (United Kingdom)](./layouts.md#en-gb) |  [en-GB_APL.kbd](en-GB_APL.kbd) |

import axios from 'axios';
import { makeBadge } from 'badge-maker';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const guildId = searchParams.get('guildId');
  const color = searchParams.get('color') || '7289DA';
  const label = searchParams.get('label') || 'Members';
  const scale = parseFloat(searchParams.get('scale') || '1');

  if (!guildId) {
    return new Response('Missing guildId', { status: 400 });
  }

  const discordLogoBase64 = 'PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgLTI4LjUgMjU2IDI1NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgZmlsbD0iIzAwMDAwMCI+Cg08ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCIvPgoNPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cg08ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+IDxnPiA8cGF0aCBkPSJNMjE2Ljg1NjMzOSwxNi41OTY2MDMxIEMyMDAuMjg1MDAyLDguODQzMjg2NjUgMTgyLjU2NjE0NCwzLjIwODQ5ODggMTY0LjA0MTU2NCwwIEMxNjEuNzY2NTIzLDQuMTEzMTgxMDYgMTU5LjEwODYyNCw5LjY0NTQ5OTA4IDE1Ny4yNzYwOTksMTQuMDQ2NDM3OSBDMTM3LjU4Mzk5NSwxMS4wODQ5ODk2IDExOC4wNzI5NjcsMTEuMDg0OTg5NiA5OC43NDMwMTYzLDE0LjA0NjQzNzkgQzk2LjkxMDg0MTcsOS42NDU0OTkwOCA5NC4xOTI1ODM4LDQuMTEzMTgxMDYgOTEuODk3MTg5NSwwIEM3My4zNTI2MDY4LDMuMjA4NDk4OCA1NS42MTMzOTQ5LDguODYzOTkxMTcgMzkuMDQyMDU4MywxNi42Mzc2NjEyIEM1LjYxNzUyMjkzLDY3LjE0NjUxNCAtMy40NDMzMTkxLDExNi40MDA4MTMgMS4wODcxMTA2OSwxNjQuOTU1NzIxIEMyMy4yNTYwMTk2LDE4MS41MTA5MTUgNDQuNzQwMzYzNCwxOTEuNTY3Njk3IDY1Ljg2MjEzMjUsMTk4LjE0ODU3NiBDNzEuMDc3MjE1MSwxOTAuOTcxMTI2IDc1LjcyODM2MjgsMTgzLjM0MTMzNSA3OS43MzUyMTM5LDE3NS4zMDAyNjEgQzcyLjEwNDAxOSwxNzIuNDAwNTc1IDY0Ljc5NDk3MjQsMTY4LjgyMjIwMiA1Ny44ODg3ODY2LDE2NC42Njc5NjMgQzU5LjcyMDk2MTIsMTYzLjMxMDU4OSA2MS41MTMxMzA0LDE2MS44OTE0NTIgNjMuMjQ0NTg5OCwxNjAuNDMxMjU3IEMxMDUuMzY3NDEsMTgwLjEzMzE4NyAxNTEuMTM0OTI4LDE4MC4xMzMxODcgMTkyLjc1NDUyMywxNjAuNDMxMjU3IEMxOTQuNTA2MzM2LDE2MS44OTE0NTIgMTk2LjI5ODE1NCwxNjMuMzEwNTg5IDE5OC4xMTAzMjYsMTY0LjY2Nzk2MyBDMTkxLjE4Mzc4NywxNjguODQyNTU2IDE4My44NTQ3MzcsMTcyLjQyMDkyOSAxNzYuMjIzNTQyLDE3NS4zMjA5NjUgQzE4MC4yMzAzOTMsMTgzLjM0MTMzNSAxODQuODYxNTM4LDE5MC45OTE4MzEgMTkwLjA5NjYyNCwxOTguMTY4OTMgQzIxMS4yMzg3NDYsMTkxLjU4ODA1MSAyMzIuNzQzMDIzLDE4MS41MzE2MTkgMjU0LjkxMTk0OSwxNjQuOTU1NzIxIEMyNjAuMjI3NzQ3LDEwOC42NjgyMDEgMjQ1LjgzMTA4Nyw1OS44NjYyNDMyIDIxNi44NTYzMzksMTYuNTk2NjAzMSBaIE04NS40NzM4NzUyLDEzNS4wOTQ4OSBDNzIuODI5MDI4MSwxMzUuMDk0ODkgNjIuNDU5MjIxNywxMjMuMjkwMTU1IDYyLjQ1OTIyMTcsMTA4LjkxNDkwMSBDNjIuNDU5MjIxNyw5NC41Mzk2NDcyIDcyLjYwNzU5NSw4Mi43MTQ1NTg3IDg1LjQ3Mzg3NTIsODIuNzE0NTU4NyBDOTguMzQwNTA2NCw4Mi43MTQ1NTg3IDEwOC43MDk5NjIsOTQuNTE4OTQyNyAxMDguNDg4NTI5LDEwOC45MTQ5MDEgQzEwOC41MDg1MzEsMTIzLjI5MDE1NSA5OC4zNDA1MDY0LDEzNS4wOTQ4OSA4NS40NzM4NzUyLDEzNS4wOTQ4OSBaIE0xNzAuNTI1MjM3LDEzNS4wOTQ4OSBDMTU3Ljg4MDM5LDEzNS4wOTQ4OSAxNDcuNTEwNTg0LDEyMy4yOTAxNTUgMTQ3LjUxMDU4NCwxMDguOTE0OTAxIEMxNDcuNTEwNTg0LDk0LjUzOTY0NzIgMTU3LjY1ODYwNiw4Mi43MTQ1NTg3IDE3MC41MjUyMzcsODIuNzE0NTU4NyBDMTgzLjM5MTUxOCw4Mi43MTQ1NTg3IDE5My43NjEzMjQsOTQuNTE4OTQyNyAxOTMuNTM5ODkxLDEwOC45MTQ5MDEgQzE5My41Mzk4OTEsMTIzLjI5MDE1NSAxODMuMzkxNTE4LDEzNS4wOTQ4OSAxNzAuNTI1MjM3LDEzNS4wOTQ4OSBaIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iPiA8L3BhdGg+IDwvZz4gPC9nPgoNPC9zdmc+';

  try {
    const r = await axios.get(
      `https://discord.com/api/v10/guilds/${guildId}?with_counts=true`,
      {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      }
    );

    let svg = makeBadge({
      label,
      message: `${r.data.approximate_member_count}`,
      color,
      labelColor: '555',
      style: 'flat',
      logoBase64: `data:image/svg+xml;base64,${discordLogoBase64}`,
    });

    if (scale !== 1) {
      svg = svg
        .replace(
          /<svg([^>]+?)width="(\d+)" height="(\d+)"/,
          (_, attrs, width, height) => {
            const scaledWidth = Math.round(parseInt(width) * scale);
            const scaledHeight = Math.round(parseInt(height) * scale);
            return `<svg${attrs}width="${scaledWidth}" height="${scaledHeight}"`;
          }
        )
        .replace(
          /(<svg[^>]*>)/,
          `$1<g transform="scale(${scale})">`
        )
        .replace(/<\/svg>/, '</g></svg>');
    }

    return new Response(svg, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (err) {
    console.error(err);

    const errorSvg = makeBadge({
      label,
      message: 'error',
      color: 'red',
      style: 'flat',
      logoBase64: `data:image/svg+xml;base64,${discordLogoBase64}`,
    });

    return new Response(errorSvg, {
      status: 500,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  }
}

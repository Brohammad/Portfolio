# Resume source

- `resume.html` — editable source (Letter, one page, ATS-friendly)
- `resume.pdf` — generated PDF served at `/resume.pdf`
- `resume-original.pdf` — backup of the previous resume
- `build.sh` — regenerates the PDF and copies it to `public/resume.pdf`

## Rebuild

```bash
./resume/build.sh
```

Uses headless Google Chrome, so no LaTeX or extra dependencies are needed.
